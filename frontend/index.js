
document.querySelector('.btn-sos').addEventListener('click', () => {
    alert('🚨 EMERGENCY ALERT TRIGGERED!\n\nYour current location has been broadcast to emergency services. Help is on the way.');
});

document.querySelectorAll('.btn-action')[2].addEventListener('click', () => {
    alert('📞 Calling National Emergency Helpline (112)...');
});
document.getElementById('btn-search').addEventListener('click', () => {
    const query = document.getElementById('hospital-search').value.trim();
    if (!query) {
        alert('Please enter a city or area to search.');
        return;
    }
    // Automatically opens Google Maps searching for hospitals in that specific area
    window.open(`https://www.google.com/maps/search/hospitals+in+${encodeURIComponent(query)}`, '_blank');
});

// 4. AI Assistant Mock Responses (Fast & Bulletproof for Hackathon)
document.getElementById('btn-ai').addEventListener('click', () => {
    const input = document.getElementById('ai-input').value.toLowerCase().trim();
    const responseBox = document.getElementById('ai-response');
    
    if (!input) {
        alert('Please ask a question first.');
        return;
    }

    responseBox.classList.remove('hidden');
    responseBox.style.padding = "10px";
    responseBox.style.marginTop = "10px";
    responseBox.style.backgroundColor = "#f0f7f4";
    responseBox.style.borderLeft = "4px solid #2ecc71";
    responseBox.innerHTML = "<strong>🤖 AI Assistant:</strong> Thinking...";

    setTimeout(() => {
        if (input.includes('burn')) {
            responseBox.innerHTML = "<strong>🤖 AI Assistant:</strong> Cool the burn under cold running water for at least 10 minutes. Do not apply ice, butter, or ointments. Cover loosely with cling wrap.";
        } else if (input.includes('bleed') || input.includes('blood')) {
            responseBox.innerHTML = "<strong>🤖 AI Assistant:</strong> Apply direct pressure to the wound using a clean cloth or bandage. Keep the injured limb elevated above heart level if possible.";
        } else if (input.includes('choking')) {
            responseBox.innerHTML = "<strong>🤖 AI Assistant:</strong> Perform the Heimlich maneuver: Stand behind the person, wrap arms around waist, make a fist, and give quick, upward abdominal thrusts.";
        } else if (input.includes('cpr') || input.includes('heart')) {
            responseBox.innerHTML = "<strong>🤖 AI Assistant:</strong> Push hard and fast in the center of the chest (100-120 compressions per minute). Call 108 immediately.";
        } else {
            responseBox.innerHTML = "<strong>🤖 AI Assistant:</strong> For safety, stay calm and call emergency services at 108 immediately. Keep the patient comfortable and awake.";
        }
    }, 800); 
});