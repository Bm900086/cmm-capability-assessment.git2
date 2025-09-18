// Main Application JavaScript
class AssessmentApp {
    constructor() {
        this.currentAssessment = null;
        this.currentCategory = null;
        this.currentCategoryIndex = 0;
        this.assessmentResults = {};
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupNavigation();
        this.initializeCharts();
        this.loadSavedProgress();
    }

    setupEventListeners() {
        // Navigation toggle for mobile
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                    this.updateActiveNavLink(link);
                }
            });
        });

        // Window scroll handler for active nav link
        window.addEventListener('scroll', () => {
            this.updateActiveNavOnScroll();
        });
    }

    setupNavigation() {
        // Update active navigation link based on scroll position
        this.updateActiveNavOnScroll();
    }

    updateActiveNavLink(activeLink) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    }

    updateActiveNavOnScroll() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    startAssessment() {
        const assessmentsSection = document.getElementById('assessments');
        if (assessmentsSection) {
            assessmentsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    viewDemo() {
        // Simulate demo by starting infrastructure assessment
        this.selectAssessment('infrastructure');
    }

    selectAssessment(assessmentType) {
        this.currentAssessment = assessmentType;
        this.currentCategoryIndex = 0;
        
        const assessment = window.assessmentData[assessmentType];
        if (!assessment) return;

        // Initialize results structure
        this.assessmentResults[assessmentType] = {};
        Object.keys(assessment.categories).forEach(category => {
            this.assessmentResults[assessmentType][category] = {};
        });

        // Show assessment form
        this.showAssessmentForm(assessment);
        
        // Hide other sections
        document.getElementById('assessments').classList.add('hidden');
        document.getElementById('results').classList.add('hidden');
        
        // Show loading animation
        this.showLoading();
        
        setTimeout(() => {
            this.hideLoading();
            this.loadFirstCategory();
        }, 1000);
    }

    showAssessmentForm(assessment) {
        const formSection = document.getElementById('assessment-form');
        const titleElement = document.getElementById('current-assessment-title');
        
        formSection.classList.remove('hidden');
        titleElement.textContent = assessment.title;
        
        // Load panel content
        this.loadPanelContent(this.currentAssessment);
        
        // Create category tabs
        this.createCategoryTabs(assessment.categories);
        
        // Scroll to form
        formSection.scrollIntoView({ behavior: 'smooth' });
    }

    loadPanelContent(assessmentType) {
        const panelsContainer = document.getElementById('info-panels');
        const panelData = window.panelContent[assessmentType];
        
        if (!panelData) return;
        
        panelsContainer.innerHTML = panelData.sections.map(section => `
            <div class="info-panel">
                <h4 class="${section.color}">
                    <i class="${section.icon}"></i>
                    ${section.heading}
                </h4>
                <p>${section.content}</p>
            </div>
        `).join('');
    }

    createCategoryTabs(categories) {
        const tabsContainer = document.getElementById('category-tabs');
        const categoryNames = Object.keys(categories);
        
        tabsContainer.innerHTML = categoryNames.map((category, index) => `
            <div class="category-tab ${index === 0 ? 'active' : ''}" 
                 onclick="app.switchCategory(${index})" 
                 data-category="${category}">
                ${category}
            </div>
        `).join('');
    }

    loadFirstCategory() {
        const assessment = window.assessmentData[this.currentAssessment];
        const categoryNames = Object.keys(assessment.categories);
        this.currentCategory = categoryNames[0];
        this.loadCategoryContent(this.currentCategory);
        this.updateProgress();
    }

    switchCategory(categoryIndex) {
        const assessment = window.assessmentData[this.currentAssessment];
        const categoryNames = Object.keys(assessment.categories);
        
        this.currentCategoryIndex = categoryIndex;
        this.currentCategory = categoryNames[categoryIndex];
        
        // Update active tab
        document.querySelectorAll('.category-tab').forEach((tab, index) => {
            tab.classList.toggle('active', index === categoryIndex);
        });
        
        this.loadCategoryContent(this.currentCategory);
        this.updateNavigationButtons();
    }

    loadCategoryContent(categoryName) {
        const assessment = window.assessmentData[this.currentAssessment];
        const category = assessment.categories[categoryName];
        const contentContainer = document.getElementById('category-content');
        
        contentContainer.innerHTML = `
            <div class="category-header">
                <h3>${categoryName}</h3>
                <p class="category-description">${category.description}</p>
                ${category.video ? `
                    <div class="video-link" style="margin-top: 1rem;">
                        <a href="${category.video.url}" target="_blank" class="resource-link">
                            <i class="fas fa-video"></i>
                            Watch: ${category.video.title} (${category.video.duration})
                        </a>
                    </div>
                ` : ''}
            </div>
            
            <div class="statements-list">
                ${category.statements.map((statement, index) => this.createStatementHTML(statement, categoryName, index)).join('')}
            </div>
        `;
        
        // Add fade-in animation
        contentContainer.classList.add('fade-in');
        setTimeout(() => contentContainer.classList.remove('fade-in'), 500);
    }

    createStatementHTML(statement, categoryName, statementIndex) {
        const savedValue = this.assessmentResults[this.currentAssessment][categoryName][statementIndex];
        
        return `
            <div class="statement-item">
                <div class="statement-header">
                    <div>
                        <div class="statement-text">${statement.text}</div>
                        <span class="phase-badge ${statement.phase.toLowerCase()}">${statement.phase}</span>
                    </div>
                </div>
                <div class="maturity-levels">
                    ${window.maturityLevels.map(level => `
                        <div class="maturity-level ${savedValue === level.level ? 'selected' : ''}" 
                             onclick="app.selectMaturityLevel('${categoryName}', ${statementIndex}, ${level.level})"
                             title="${level.description}">
                            <div style="font-weight: 600; margin-bottom: 0.25rem;">${level.level}</div>
                            <div style="font-size: 0.75rem;">${level.label}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    selectMaturityLevel(categoryName, statementIndex, level) {
        // Save the selection
        this.assessmentResults[this.currentAssessment][categoryName][statementIndex] = level;
        
        // Update UI
        const statementItem = document.querySelectorAll('.statement-item')[statementIndex];
        const maturityLevels = statementItem.querySelectorAll('.maturity-level');
        
        maturityLevels.forEach((element, index) => {
            element.classList.toggle('selected', window.maturityLevels[index].level === level);
        });
        
        // Save progress
        this.saveProgress();
        this.updateProgress();
        
        // Add visual feedback
        const selectedElement = Array.from(maturityLevels).find(el => 
            el.textContent.includes(level.toString())
        );
        if (selectedElement) {
            selectedElement.style.transform = 'scale(1.05)';
            setTimeout(() => {
                selectedElement.style.transform = '';
            }, 200);
        }
    }

    previousCategory() {
        if (this.currentCategoryIndex > 0) {
            this.switchCategory(this.currentCategoryIndex - 1);
        }
    }

    nextCategory() {
        const assessment = window.assessmentData[this.currentAssessment];
        const categoryNames = Object.keys(assessment.categories);
        
        if (this.currentCategoryIndex < categoryNames.length - 1) {
            this.switchCategory(this.currentCategoryIndex + 1);
        } else {
            this.completeAssessment();
        }
    }

    updateNavigationButtons() {
        const assessment = window.assessmentData[this.currentAssessment];
        const categoryNames = Object.keys(assessment.categories);
        
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const completeBtn = document.getElementById('complete-btn');
        
        // Update previous button
        prevBtn.disabled = this.currentCategoryIndex === 0;
        
        // Update next/complete button
        if (this.currentCategoryIndex === categoryNames.length - 1) {
            nextBtn.classList.add('hidden');
            completeBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.remove('hidden');
            completeBtn.classList.add('hidden');
        }
    }

    updateProgress() {
        const assessment = window.assessmentData[this.currentAssessment];
        const totalQuestions = Object.values(assessment.categories)
            .reduce((total, category) => total + category.statements.length, 0);
        
        let answeredQuestions = 0;
        Object.values(this.assessmentResults[this.currentAssessment]).forEach(category => {
            answeredQuestions += Object.keys(category).length;
        });
        
        const progressPercentage = Math.round((answeredQuestions / totalQuestions) * 100);
        
        document.querySelector('.progress-fill').style.width = `${progressPercentage}%`;
        document.querySelector('.progress-text').textContent = `${progressPercentage}% Complete`;
    }

    completeAssessment() {
        this.showLoading();
        
        setTimeout(() => {
            this.hideLoading();
            this.showResults();
        }, 1500);
    }

    showResults() {
        // Hide assessment form
        document.getElementById('assessment-form').classList.add('hidden');
        
        // Show results section
        const resultsSection = document.getElementById('results');
        resultsSection.classList.remove('hidden');
        
        // Calculate and display results
        this.calculateResults();
        this.displayScoreCards();
        this.displayCharts();
        this.displayRecommendations();
        this.displayResources();
        
        // Scroll to results
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }

    calculateResults() {
        const assessment = window.assessmentData[this.currentAssessment];
        const results = this.assessmentResults[this.currentAssessment];
        
        this.calculatedResults = {
            categoryScores: {},
            overallScore: 0,
            maturityDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
        };
        
        let totalQuestions = 0;
        let totalScore = 0;
        
        Object.keys(assessment.categories).forEach(categoryName => {
            const category = assessment.categories[categoryName];
            const categoryResults = results[categoryName];
            
            let categoryScore = 0;
            let categoryQuestions = 0;
            
            category.statements.forEach((statement, index) => {
                const userScore = categoryResults[index] || 1;
                categoryScore += userScore;
                categoryQuestions++;
                totalQuestions++;
                totalScore += userScore;
                
                this.calculatedResults.maturityDistribution[userScore]++;
            });
            
            this.calculatedResults.categoryScores[categoryName] = {
                score: Math.round((categoryScore / (categoryQuestions * 5)) * 100),
                rawScore: categoryScore,
                maxScore: categoryQuestions * 5
            };
        });
        
        this.calculatedResults.overallScore = Math.round((totalScore / (totalQuestions * 5)) * 100);
    }

    displayScoreCards() {
        const scoreCardsContainer = document.getElementById('score-cards');
        const categoryScores = this.calculatedResults.categoryScores;
        
        let html = `
            <div class="score-card">
                <div class="score-value">${this.calculatedResults.overallScore}%</div>
                <div class="score-label">Overall Maturity</div>
            </div>
        `;
        
        Object.keys(categoryScores).forEach(category => {
            const score = categoryScores[category].score;
            html += `
                <div class="score-card">
                    <div class="score-value">${score}%</div>
                    <div class="score-label">${category}</div>
                </div>
            `;
        });
        
        scoreCardsContainer.innerHTML = html;
    }

    displayCharts() {
        this.createOverallChart();
        this.createCategoryChart();
    }

    createOverallChart() {
        const ctx = document.getElementById('overall-chart').getContext('2d');
        const distribution = this.calculatedResults.maturityDistribution;
        
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Not Present', 'Basic', 'Intermediate', 'Advanced', 'Optimized'],
                datasets: [{
                    data: Object.values(distribution),
                    backgroundColor: [
                        '#ef4444',
                        '#f59e0b',
                        '#3b82f6',
                        '#10b981',
                        '#8b5cf6'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    createCategoryChart() {
        const ctx = document.getElementById('category-chart').getContext('2d');
        const categoryScores = this.calculatedResults.categoryScores;
        
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: Object.keys(categoryScores),
                datasets: [{
                    label: 'Current Maturity',
                    data: Object.values(categoryScores).map(cat => cat.score),
                    backgroundColor: 'rgba(37, 99, 235, 0.2)',
                    borderColor: 'rgba(37, 99, 235, 1)',
                    pointBackgroundColor: 'rgba(37, 99, 235, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(37, 99, 235, 1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    line: {
                        borderWidth: 3
                    }
                },
                scales: {
                    r: {
                        angleLines: {
                            display: false
                        },
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                },
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    displayRecommendations() {
        const recommendationsContainer = document.getElementById('recommendation-cards');
        const assessmentRecommendations = window.recommendations[this.currentAssessment] || [];
        
        const html = assessmentRecommendations.map(rec => `
            <div class="recommendation-card">
                <h4>${rec.title}</h4>
                <p>${rec.description}</p>
                <div class="recommendation-meta">
                    <span class="priority-badge priority-${rec.priority}">${rec.priority.toUpperCase()}</span>
                    <span class="category-tag">${rec.category}</span>
                </div>
            </div>
        `).join('');
        
        recommendationsContainer.innerHTML = html;
    }

    displayResources() {
        const resourcesContainer = document.getElementById('resource-cards');
        const assessment = window.assessmentData[this.currentAssessment];
        
        const html = Object.entries(assessment.categories)
            .filter(([_, category]) => category.video)
            .map(([categoryName, category]) => `
                <div class="resource-card">
                    <div class="resource-icon">
                        <i class="fas fa-video"></i>
                    </div>
                    <h3>${categoryName}</h3>
                    <p>${category.video.title}</p>
                    <a href="${category.video.url}" target="_blank" class="resource-link">
                        Watch Video (${category.video.duration}) <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            `).join('');
        
        resourcesContainer.innerHTML = html;
    }

    goBackToAssessments() {
        document.getElementById('assessment-form').classList.add('hidden');
        document.getElementById('results').classList.add('hidden');
        document.getElementById('assessments').classList.remove('hidden');
        
        document.getElementById('assessments').scrollIntoView({ behavior: 'smooth' });
    }

    exportResults() {
        const results = {
            assessment: this.currentAssessment,
            scores: this.calculatedResults,
            timestamp: new Date().toISOString(),
            responses: this.assessmentResults[this.currentAssessment]
        };
        
        const dataStr = JSON.stringify(results, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = `assessment-results-${this.currentAssessment}-${new Date().toISOString().split('T')[0]}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    }

    shareResults() {
        if (navigator.share) {
            navigator.share({
                title: 'IT Capability Assessment Results',
                text: `I completed an IT capability assessment with an overall maturity score of ${this.calculatedResults.overallScore}%`,
                url: window.location.href
            });
        } else {
            // Fallback: copy link to clipboard
            navigator.clipboard.writeText(window.location.href).then(() => {
                alert('Link copied to clipboard!');
            });
        }
    }

    saveProgress() {
        const progressData = {
            currentAssessment: this.currentAssessment,
            currentCategoryIndex: this.currentCategoryIndex,
            assessmentResults: this.assessmentResults,
            timestamp: new Date().toISOString()
        };
        
        localStorage.setItem('assessmentProgress', JSON.stringify(progressData));
    }

    loadSavedProgress() {
        const savedData = localStorage.getItem('assessmentProgress');
        if (savedData) {
            try {
                const progressData = JSON.parse(savedData);
                this.assessmentResults = progressData.assessmentResults || {};
                
                // Check if saved progress is recent (within 24 hours)
                const savedTime = new Date(progressData.timestamp);
                const now = new Date();
                const hoursDiff = (now - savedTime) / (1000 * 60 * 60);
                
                if (hoursDiff < 24) {
                    // Show option to resume
                    this.showResumeOption(progressData);
                }
            } catch (error) {
                console.error('Error loading saved progress:', error);
            }
        }
    }

    showResumeOption(progressData) {
        if (progressData.currentAssessment && Object.keys(progressData.assessmentResults).length > 0) {
            const resume = confirm('You have saved progress from a previous assessment. Would you like to resume where you left off?');
            if (resume) {
                this.currentAssessment = progressData.currentAssessment;
                this.currentCategoryIndex = progressData.currentCategoryIndex || 0;
                this.selectAssessment(this.currentAssessment);
            }
        }
    }

    showLoading() {
        document.getElementById('loading-overlay').classList.remove('hidden');
    }

    hideLoading() {
        document.getElementById('loading-overlay').classList.add('hidden');
    }

    initializeCharts() {
        // Chart.js default configuration
        Chart.defaults.font.family = "'Inter', sans-serif";
        Chart.defaults.color = '#64748b';
    }
}

// Global functions
function startAssessment() {
    app.startAssessment();
}

function viewDemo() {
    app.viewDemo();
}

function selectAssessment(type) {
    app.selectAssessment(type);
}

function previousCategory() {
    app.previousCategory();
}

function nextCategory() {
    app.nextCategory();
}

function completeAssessment() {
    app.completeAssessment();
}

function goBackToAssessments() {
    app.goBackToAssessments();
}

function exportResults() {
    app.exportResults();
}

function shareResults() {
    app.shareResults();
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.app = new AssessmentApp();
});

// Add some additional utility styles
const additionalStyles = `
<style>
.priority-badge {
    padding: 0.25rem 0.5rem;
    border-radius: 0.375rem;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-right: 0.5rem;
}

.priority-high {
    background-color: #fef3c7;
    color: #92400e;
}

.priority-medium {
    background-color: #dbeafe;
    color: #1e40af;
}

.priority-low {
    background-color: #d1fae5;
    color: #065f46;
}

.category-tag {
    padding: 0.25rem 0.5rem;
    background-color: #f1f5f9;
    color: #475569;
    border-radius: 0.375rem;
    font-size: 0.75rem;
    font-weight: 500;
}

.recommendation-meta {
    display: flex;
    align-items: center;
    margin-top: 1rem;
}

.nav-menu.active {
    display: flex !important;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    border-top: 1px solid #e2e8f0;
}

@media (max-width: 768px) {
    .nav-menu {
        display: none;
    }
}

.video-link {
    margin-top: 1rem;
}

.video-link a {
    color: #2563eb;
    text-decoration: none;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #eff6ff;
    border-radius: 0.5rem;
    transition: all 0.15s ease-in-out;
}

.video-link a:hover {
    background-color: #dbeafe;
    color: #1d4ed8;
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', additionalStyles);