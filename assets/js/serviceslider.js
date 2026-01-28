// Auto-slider functionality for services tabs
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('#pills-tab button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    let currentIndex = 0;
    let autoSlideInterval;
    const slideDuration = 5000; // 5 seconds
    
    // Function to switch to a specific tab
    function switchTab(index) {
        // Remove active classes
        tabs.forEach(tab => tab.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('show', 'active'));
        
        // Add active classes to new tab
        tabs[index].classList.add('active');
        tabPanes[index].classList.add('show', 'active');
        
        currentIndex = index;
        
        // Trigger Bootstrap tab show event
        const tab = new bootstrap.Tab(tabs[index]);
        tab.show();
    }
    
    // Function to go to next tab
    function nextTab() {
        let nextIndex = (currentIndex + 1) % tabs.length;
        switchTab(nextIndex);
    }
    
    // Start auto-sliding
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextTab, slideDuration);
    }
    
    // Stop auto-sliding
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    // Event listeners for tab buttons (optional manual switching)
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function() {
            stopAutoSlide();
            switchTab(index);
            startAutoSlide();
        });
    });
    
    // Pause auto-slide on hover (optional)
    const tabContent = document.querySelector('.tab-content');
    tabContent.addEventListener('mouseenter', stopAutoSlide);
    tabContent.addEventListener('mouseleave', startAutoSlide);
    
    // Start auto-slide on page load
    startAutoSlide();
});