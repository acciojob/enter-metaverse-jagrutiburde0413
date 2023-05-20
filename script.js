//your JS code here. If required.
  const statusParagraph = document.getElementById('status');
    const enterButton = document.getElementById('enterBtn');

    // Add a click event listener to the button
    enterButton.addEventListener('click', function() {
      // Update the text content of the paragraph
      statusParagraph.textContent = 'Entered Metaverse';

      // Create a new h1 element
      const heading = document.createElement('h1');
      heading.textContent = statusParagraph.textContent;

      // Replace the paragraph with the new h1 element
      statusParagraph.parentNode.replaceChild(heading, statusParagraph);
    });
