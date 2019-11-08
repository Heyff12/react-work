/** @format */

import * as React from 'react'
const ReactMarkdown1 = require('react-markdown/with-html')
const toc = require('remark-toc')
// const CodeBlock = require('./code-block')

import marked from 'marked'
import hljs from 'highlight.js'

// require('github-markdown-css')
require('./github-markdown.less')

const ReactMarkdown = require('react-markdown')
const htmlParser = require('react-markdown/plugins/html-parser')
const parseHtml = htmlParser({
  isValidNode: node => node.type !== 'script',
})

const markdown = `
# Live demo

Changes are automatically rendered as you type.

## Table of Contents

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`

Pretty neat, eh?

## Tables?

| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---------------

A component by [Espen Hovlandsdal](https://espen.codes/)
`

class Markdown extends React.Component<{}, {}> {
  public componentWillMount() {
    marked.setOptions({
      highlight: code => hljs.highlightAuto(code).value,
    })
  }

  public componentDidMount() {
    console.log('componentDidMount')
  }

  public render() {
    return (
      <>
        <ReactMarkdown
          className="markdown-body"
          source={markdown}
          escapeHtml={false}
          astPlugins={[parseHtml]}
        />
        <ReactMarkdown1
          className="markdown-body"
          source={markdown}
          escapeHtml={false}
          // renderers={{code: CodeBlock}}
          plugins={[toc]}
        />
        {marked(markdown)}
      </>
    )
  }
}

export default Markdown
