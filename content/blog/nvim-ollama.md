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

Back when GitHub Copilot first released, I was able to join the technical preview and test it out for myself. During that time, I came to appreciate the convenience of having someone to pair program with integrated into my IDE.

To be fair, I don't think of an AI coding assistant as an absolute must-have, but rather a convenient tool that allows one to do more in less time. As technology advances, AI will likely become an increasingly integral part of a developer's arsenal, similar to how LSPs did before them. Therefore, I have been looking for something similar ever since, without wanting to spend a lot of money on it or compromise on security by sending my code through across the internet.

Enter Ollama, an open-source tool for running LLMs on your local machine, similar to Docker and its containers, which is particularly useful if you have some GPU computing power to spare that won't be utilized during regular coding otherwise anyway.

## 1. Installing Ollama

So let's first start off by installing Ollama. If you are running Linux like me you can just run the following command to install it. Otherwise please refer to the instructions in the [official GitHub repository](https://github.com/ollama/ollama).
```
curl -fsSL https://ollama.com/install.sh | sh
```

After the installation process has finished you can try to startup the model of your choice and since I'm mainly going to use the LLM as a coding assistant as mentioned before I decided to use the Code Llama model.
```
ollama run codellama
```

This will automatically pull and run the 7B parameter version of the model.

## 2. Configure the Neovim Plugin

Next add the [gen.nvim](https://github.com/David-Kunz/gen.nvim) plugin, which is going to serve as the interface between Neovim and Ollama, via your plugin manager of choice in my case I'm using [lazy.nvim](https://github.com/folke/lazy.nvim).
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
  prompt = "Enhance the maintainability of the following code, $input, only output the result in the format ```$filetype\n...\n```:\n```$filetype\n$text\n```",
  replace = true,
  extract = "```$filetype\n(.-)```",
  model = "codellama"
}
```

## Sources

* [ollama/ollama](https://github.com/ollama/ollama) - Official GitHub Repository
* [gen.nvim](https://github.com/David-Kunz/gen.nvim) - Plugin by David Kunz
* [Video](https://www.youtube.com/watch?v=FIZt7MinpMY) showcasing the plugin.
