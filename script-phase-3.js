const data = []; // Keep it an empty array initially

// Fetch JSON and populate data
fetch("languages-simpler.json")
    .then(response => response.json())
    .then(jsonData => {
        jsonData.languages.forEach(lang => {
            data.push({
                name: lang.name || "",
                year: lang.year || "",
                creator: lang.creator || "",
                paradigm: lang.paradigm || [],
                influences: lang.influences || [],
                influenced_by: lang.influenced_by || []
            });
        });
        makePhaseThree();
        console.log("Loaded Data:", data); // Debug: Check if data is correctly loaded

    })
    .catch(error => console.error("Error loading JSON:", error));

    
    

function makePhaseThree() {
    const panelWidth = 700;
    const panelHeight = data.length * 60;
    const svg = d3.select("body")
        .append("svg")
        .attr("width", panelWidth)
        .attr("height", panelHeight);

    const tooltip = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("background", "black")
        .style("color", "white")
        .style("padding", "5px")
        .style("border-radius", "5px")
        .style("visibility", "hidden")
        .style("font-size", "12px");

    const textElements = {};// Store both language and paradigm elements
    
    
    data.forEach((item, index) => {
        const yOffset = index * 60;
         // Create a background yellow rectangle (Initially Hidden)
    const bgRect = svg.append("rect")
        .attr("x", 10)
        .attr("y", yOffset + 15)
        .attr("width", 100) // Adjust width to fit text
        .attr("height", 30)
        .attr("fill", "yellow")
        .attr("rx", 5)
        .attr("ry", 5)
        .style("visibility", "hidden"); // Hide it initially
    
        // Add text for language name with hover behavior
        const text = svg.append("text")
            .attr("x", 20)
            .attr("y", yOffset + 30)
            .attr("fill", "black")
            .attr("font-size", "16px")
            .attr("font-family", "Arial, sans-serif")
            .style("cursor", "pointer")
            .text(item.name)
            .on("click", function(event) {
                tooltip.html(`Year: ${item.year}<br>Creator: ${item.creator}`)
                    .style("visibility", "visible")
                    .style("top", (event.pageY + 10) + "px")
                    .style("left", (event.pageX + 10) + "px");
            })
            .on("mouseout", function() {
                tooltip.style("visibility", "hidden");
            })
            .on("mouseover", function() {
                d3.select(this).style("font-weight", "bold");
                bgRect.style("visibility", "visible"); // Show the background
                
                // Move influenced languages to the right, use .transition(),duration(500) for shift movement.
            item.influences.forEach(lang => {
                if (textElements[lang]) {
                    textElements[lang].text.transition().duration(500).attr("x", 50);
                    textElements[lang].paradigm.forEach(p => p.transition().duration(500).attr("x", +p.attr("x") + 30));
  
                }
            });
                
                 // Move influencing languages to the left
            item.influenced_by.forEach(lang => {
                if (textElements[lang]) {
                    textElements[lang].text.transition().duration(500).attr("x", 5);
                    textElements[lang].paradigm.forEach(p => p.transition().duration(500).attr("x", +p.attr("x") - 20));

                }
            });
                
            })
            .on("mouseleave", function() {
                d3.select(this).style("font-weight", "normal");
                bgRect.style("visibility", "hidden"); // Hide the background again
                
                // Reset influenced languages position
            item.influences.forEach(lang => {
                if (textElements[lang]) {
                    textElements[lang].text.transition().duration(500).attr("x", 20);
                    textElements[lang].paradigm.forEach(p => p.transition().duration(500).attr("x", +p.attr("x") - 30));

                }
            });
                
                  // Reset influencing languages position
            item.influenced_by.forEach(lang => {
                if (textElements[lang]) {
                    textElements[lang].text.transition().duration(500).attr("x", 20);
                    textElements[lang].paradigm.forEach(p => p.transition().duration(500).attr("x", +p.attr("x") + 20));

                }
            });
                
            });

        // Store the text element
        textElements[item.name] = { text: text, bgRect: bgRect, paradigm: [] };
        
        // Add rectangles and text for up to 3 paradigms
        item.paradigm.forEach((paradigms, i) => {
            const rect = svg.append("rect")
                .attr("x", 200 + (i * 160))
                .attr("y", yOffset + 10)
                .attr("width", 150)
                .attr("height", 30)
                .attr("fill", "blue")
                .attr("rx", 5)
                .attr("ry", 5);

            const paradigmText = svg.append("text")
                .attr("x", 275 + (i * 160))
                .attr("y", yOffset + 30)
                .attr("fill", "white")
                .attr("font-size", "14px")
                .attr("font-family", "Arial, sans-serif")
                .attr("text-anchor", "middle")
                .attr("dominant-baseline", "middle")
                .text(paradigms);
        // Store both rect and text for the paradigms
        textElements[item.name].paradigm.push(rect, paradigmText);
        });
    });
}



