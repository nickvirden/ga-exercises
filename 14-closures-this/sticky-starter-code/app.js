$(function() {
    
    console.log($('#content-field').val());
    
    var $stickyColor = $('#stickyColor'),
        $stickyText = $('#stickyText'),
        $btn = $('#addSticky'),
        $container = $('.container');
    
    var count = 1;
    
    $btn.on('click', function() {
        
        var backgroundColor = $stickyColor.val(),
            text = $stickyText.val();
        
        var $element = $('<div class="sticky">' + count + '. ' + text + '</div>');
        
        $element.css('background', backgroundColor);
        
        $container.append($element);
        
        count++;
    });
    
    
    // Create Input Button and Elements
    // 1. Copy and paste input buttons into HTML file
    // 2. Assign them values, ids, etc
    
    
    // Create jQuery
    // 1. $(function () {})
    
    // Sticky note color by user input
    // 1. Input field with color selector
    // 2. Extract val from content field and assign to variable
    // 3. Assign it to variable
    // 4. Create a function that encapsulates the color variable and updates it every time it changes
    // 5. Assign this color to the color of the next sticky note
    
    
    // Stick note message by user input
    // 1. Store the value of the input box
    // 2. Put that value between the <span> tags
    
    // Each sticky should start with a number representing the order of it's creation
    
    
    
});