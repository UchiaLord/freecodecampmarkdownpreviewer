import React, { useState, useEffect } from 'react';
import './markdownpreview.css';

const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
&gt; Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  useEffect(() => {
    document.getElementById('preview').innerHTML = convertMarkdownToHTML(markdown);
  }, [markdown]);

  const convertMarkdownToHTML = (md) => {
    // Convert Markdown to HTML without using marked library
    // This is a simplified example and may not cover all edge cases
    return md
      .replace(/# (.+)/g, '<h1>$1</h1>')
      .replace(/## (.+)/g, '<h2>$1</h2>')
      .replace(/### (.+)/g, '<h3>$1</h3>')
      .replace(/\[(.+)\]\((.+)\)/g, '<a href="$2">$1</a>')
      .replace(/`(.+)`/g, '<code>$1</code>')
      .replace(/```([\s\S]+?)```/g, '<pre>$1</pre>')
      .replace(/- (.+)/g, '<li>$1</li>')
      .replace(/> (.+)/g, '<blockquote>$1</blockquote>')
      .replace(/!\[.*\]\((.+)\)/g, '<img src="$1" alt="Image"/>')
      .replace(/\*\*(.+)\*\*/g, '<strong>$1</strong>')
      .replace(/(.+)\n/g, '$1<br/>'); // Interpret line breaks
  };

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div>
      <div>
        <h2>Editor</h2>
        <textarea id="editor" value={markdown} onChange={handleChange} />
      </div>
      <div>
        <h2>Preview</h2>
        <div id="preview" dangerouslySetInnerHTML={{ __html: convertMarkdownToHTML(markdown) }}></div>
      </div>
    </div>
  );
};

export default MarkdownPreviewer;
