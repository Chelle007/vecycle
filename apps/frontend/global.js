// Generate HTML with Handlebars.js function
function generateHTML(templateId, data, outputContainerId) {
    // Compile the Handlebars template from the script tag
    var source = document.getElementById(templateId).innerHTML;
    var template = Handlebars.compile(source);
    
    // Generate HTML for each element in data
    var combinedHtml = "";
    for (var i = 0; i < data.length; i++) {
        combinedHtml += template(data[i]);
    }
    
    // Insert the generated HTML into the container element
    document.getElementById(outputContainerId).innerHTML = combinedHtml;
}

function generateHTMLObject(templateId, data, outputContainerId) {
    // Compile the Handlebars template from the script tag
    var source = document.getElementById(templateId).innerHTML;
    var template = Handlebars.compile(source);
    
    // Generate HTML for each element in data
    var combinedHtml = template(data);
    
    // Insert the generated HTML into the container element
    document.getElementById(outputContainerId).innerHTML = combinedHtml;
}