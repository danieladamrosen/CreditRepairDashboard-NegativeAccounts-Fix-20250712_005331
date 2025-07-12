// Debug script to inspect Credit Accounts DOM structure
console.log("=== Credit Accounts DOM Inspector ===");

// Find the Credit Accounts section
const creditAccountsSection = document.querySelector('[data-section="credit-accounts"]');
if (creditAccountsSection) {
    console.log("Found Credit Accounts section:", creditAccountsSection);
    
    // Find the card element
    const cardElement = creditAccountsSection.querySelector('div[class*="border"]');
    if (cardElement) {
        console.log("Card element found:", cardElement);
        console.log("Current classes:", cardElement.className);
        
        // Check if border is present
        const hasBorder = cardElement.className.includes('border');
        const hasGrayBorder = cardElement.className.includes('border-gray-200');
        
        console.log("Has border:", hasBorder);
        console.log("Has gray border:", hasGrayBorder);
        
        // Apply the correct border if missing
        if (!hasGrayBorder) {
            console.log("Adding gray border...");
            cardElement.className = cardElement.className.replace(/border-\w+-\d+/g, '');
            cardElement.classList.add('border', 'border-gray-200');
            console.log("Updated classes:", cardElement.className);
        }
    }
    
    // Check if the section is expanded
    const isExpanded = creditAccountsSection.querySelector('[data-section="negative-accounts"]');
    console.log("Section is expanded:", !!isExpanded);
    
} else {
    console.log("Credit Accounts section not found");
}

// Also check the CollapsedCreditCard component structure
const collapsedCards = document.querySelectorAll('.cursor-pointer[class*="transition-all"]');
console.log("Found collapsed cards:", collapsedCards.length);
collapsedCards.forEach((card, index) => {
    console.log(`Card ${index}:`, card.className);
});