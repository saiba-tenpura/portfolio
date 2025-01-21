---
title: Neovim + Ollama - Run a local LLM as coding assistant
description: A short guide on how to utilize the power of LLMs inside of Neovim via Ollama.
image:
  src: /blog/nvim-ollama/cover.png
  alt: Neovim + Ollama
created_at: 2024-05-20
---

Back when GitHub Copilot first released, I was able to join the technical preview and test it out for myself. During that time, I came to appreciate the convenience of having someone to pair program with integrated into my IDE.

To be fair, I don't think of an AI coding assistant as an absolute must-have, but rather a convenient tool that allows one to do more in less time. As technology advances, AI will likely become an increasingly integral part of a developer's arsenal, similar to how LSPs did before them. Therefore, I have been looking for something similar ever since, without wanting to spend a lot of money on it or compromise on security by sending my code through across the internet.

Enter Ollama, an open-source tool for running LLMs on your local machine, similar to Docker and its containers, which is particularly useful if you have some GPU computing power to spare that won't be utilized during regular coding otherwise anyway.

## Installing Ollama

So let's first start off by installing Ollama. If you are running Linux like me you can just run the following command to install it. Otherwise please refer to the instructions in the [official GitHub repository](https://github.com/ollama/ollama).

```
curl -fsSL https://ollama.com/install.sh | sh
```

After the installation process has finished, you can setup the model of your choice. In this case, I decided on the Code Llama model since it covers my primary programming languages. The following command will automatically pull and run the 7B parameter version of it.

```
ollama run llama3.1
```

## Configure the Neovim Plugin

Next add the [gen.nvim](https://github.com/David-Kunz/gen.nvim) plugin, which is going to serve as the interface between Neovim and Ollama, via your plugin manager of choice. In this example I'm using [lazy.nvim](https://github.com/folke/lazy.nvim).

```
require('lazy').setup({
  "David-Kunz/gen.nvim",
})
```

Then, you can set up the plugin by specifying the model, keyboard shortcuts, and other options you want to use for interacting with the model.

```
require('gen').setup({
  model = "llama3.1",
  host = "localhost",
  port = "11434",
})

vim.keymap.set({'n', 'v'}, '<leader>]', ':Gen<CR>')
```

## Usage

The previously defined shortcut can be used to prompt the LLM either by selecting text marked in visual mode or inputting a prompt manually. The plugin is equipped with a few useful prompts by default.

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

## Adding Custom Prompts

You are also able to add your own base prompts to suit it to your own needs. In the definition you can specify a base prompt, if the selection should be automatically replaced, the regex used for extraction and the LLM which should be used.

```
require('gen').prompts['Enhance_Code_Maintainability'] = {
  prompt = "Enhance the maintainability of the following code, $input, only output the result in the format ```$filetype\n...\n```:\n```$filetype\n$text\n```",
  replace = true,
  extract = "```$filetype\n(.-)```",
  model = "codellama"
}
```

Depending on the specific use case, the results achieved by using different prompts and models might differ. Thus is makes sense to further experiment with the basic setup provided here to suit it to your own needs as I'm still working this out for myself.

## Sources

* [ollama/ollama](https://github.com/ollama/ollama) - Official GitHub Repository
* [gen.nvim](https://github.com/David-Kunz/gen.nvim) - Plugin by David Kunz
* [Video](https://www.youtube.com/watch?v=FIZt7MinpMY) showcasing the plugin.
