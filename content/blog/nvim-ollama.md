---
title: Neovim + Ollama - Run a local LLM as coding assistant
description: Follow this guide to utilize the power of LLMs inside of Neovim.
image:
  src: /blog/my-portfolio/cover.png
  alt: Neovim + Ollama
head:
  meta:
    - name: keywords
      content: 'Neovim, Ollama, Code Llama'
created_at: 2024-05-20
---

ToDo: Write a small intro for the blog entry.

## 1. Installing Ollama

Let's start off by first installing Ollama which is an open-source tool for running LLMs on your local machine akin to Docker and it's containers.

If you are running Linux like me you can just run the following command to install it. Otherwise please refer to the instructions in the [official GitHub repository](https://github.com/ollama/ollama).
```
curl -fsSL https://ollama.com/install.sh | sh
```

After the installation process has finished you can try to startup the model of your choice and since I'm mainly going to use the LLM as a coding assistant I decided to use the Code Llama model.
```
ollama run codellama
```

This will automatically pull and run the 7B parameter version of the model. Feel free to play around with it for a bit. When you are done you can exit by entering `/bye`.

## 2. Configure the Neovim Plugin

Next add the [gen.nvim](https://github.com/David-Kunz/gen.nvim) plugin via your Neovim plugin manager of choice in my case I'm using [lazy.nvim](https://github.com/folke/lazy.nvim).
```
require('lazy').setup({
  "David-Kunz/gen.nvim",
})
```

Then you can setup the plugin by specifying the model and keyboard shortcuts you would like to use for interacting with the model.

```
require('gen').setup({
  model = "codellama",
  host = "localhost",
  port = "11434",
})

vim.keymap.set({'n', 'v'}, '<leader>]', ':Gen<CR>')
```

## 3. Usage

The previously defined shortcut can be used to prompt the LLM either by selecting text marked in visual mode or inputting a prompt manually.

The plugin comes equipped with a few prompts by default.

```
Prompt:
1: Ask
2: Change
3: Change Code
4: Chat
5: Enhance Code
6: Enhance Grammar Spelling
7: Enhance Wording
8: Generate
9: Make Concise
10: Make List
11: Make Table
12: Review Code
13: Summarize
Type number and <Enter> or click with the mouse (q or empty cancels): 8
Prompt: Write a hello world function in JavaScript.
```

The resulting output:

````
```
function helloWorld() {
  console.log("Hello, World!");
}
```
This function will print "Hello, World!" to the console when it is called.
````

## 4. Adding Custom Prompts

You are also able to add your own prompts additional prompts.

In the definition you can specify a base prompt, if the selection should be replaced, the regex used for extraction and the model which should be used.
```
require('gen').prompts['Enhance_Code_Maintainability'] = {
  prompt = "Enhance the maintainability of the following code, only output the result in the format ```$filetype\n...\n```:\n```$filetype\n$text\n```",
  replace = true,
  extract = "```$filetype\n(.-)```",
  model = "llama3"
}
```

## Sources

* [ollama/ollama](https://github.com/ollama/ollama) - Official GitHub Repository
* [gen.nvim](https://github.com/David-Kunz/gen.nvim) - Plugin by David Kunz
* [Video](https://www.youtube.com/watch?v=FIZt7MinpMY) showcasing the plugin.
