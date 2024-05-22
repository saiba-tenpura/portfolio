---
title: Neovim + Ollama - Run local LLMs as coding assistant
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

## 3. Adding Custom Prompts

```

```

## Usage

## Sources

* [ollama/ollama](https://github.com/ollama/ollama) - Official GitHub Repository
* [gen.nvim](https://github.com/David-Kunz/gen.nvim) - Plugin by David Kunz
* [Video](https://www.youtube.com/watch?v=FIZt7MinpMY) showcasing the plugin.
