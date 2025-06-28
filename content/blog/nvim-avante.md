---
title: Avante - A Cursor like experience for Neovim
description: Elevate your Neovim experience by yet another level.
image:
  src: /blog/nvim-avante/cover.png
  alt: Neovim + Avante
created_at: 2025-02-01
---

This is a continuation of my [previous blog entry](/blog/nvim-ollama) about setting up Neovim with Ollama but this time we are using new plugin called [Avante](https://github.com/yetone/avante.nvim) which provides a [Cursor](https://www.cursor.com/) like experience.

If you are not familiar with Cursor it's an IDE leveraging AI to increase developer productivity by providing features like code suggestions and an integrated AI chat which is able to reference your code.

## Installing the plugin

Let's start by installing and configuring it via the Neovim plugin manager of choice. In my case I'm using [lazy.nvim](https://github.com/folke/lazy.nvim), but you can find other examples in the README of the Avante GitHub repository.

```lua
require('lazy').setup({
  {
    "yetone/avante.nvim",
    event = "VeryLazy",
    lazy = false,
    version = false, -- Never set this value to "*"! Never!
    ---@module 'avanta'
    ---@type avante.Config
    opts = {
      -- Add any opts here
    },
    -- if you want to build from source then do `make BUILD_FROM_SOURCE=true`
    build = "make",
    -- build = "powershell -ExecutionPolicy Bypass -File Build.ps1 -BuildFromSource false" -- for windows
    dependencies = {
      "nvim-lua/plenary.nvim",
      "MunifTanjim/nui.nvim",
      --- The below dependencies are optional,
      -- "echasnovski/mini.pick", -- for file_selector provider mini.pick
      -- "nvim-telescope/telescope.nvim", -- for file_selector provider telescope
      -- "hrsh7th/nvim-cmp", -- autocompletion for avante commands and mentions
      -- "ibhagwan/fzf-lua", -- for file_selector provider fzf
      -- "stevearc/dressing.nvim", -- for input provider dressing
      -- "folke/snacks.nvim", -- for input provider snacks
      -- "nvim-tree/nvim-web-devicons", -- or echasnovski/mini.icons
      -- "zbirenbaum/copilot.lua", -- for providers='copilot'
      {
        -- support for image pasting
        "HakonHarnes/img-clip.nvim",
        event = "VeryLazy",
        opts = {
          -- recommended settings
          default = {
            embed_image_as_base64 = false,
            prompt_for_file_name = false,
            drag_and_drop = {
              insert_mode = true,
            },
            -- required for Windows users
            use_absolute_path = true,
          },
        },
      },
      {
        -- Make sure to set this up properly if you have lazy=true
        'MeanderingProgrammer/render-markdown.nvim',
        opts = {
          file_types = { "Avante" },
        },
        ft = { "Avante" },
      },
    },
  }
})
```

## Choosing a Model

When choosing a model it is essential to account for your available hardware capabilities. As a general rule of thumb, the size of your VRAM should be at least 1.2 times greater than the size of the model you are trying to run.

For example given the table below which contains the currently available options of the DeepSeek-R1 reasoning model we would need 10.8 GB of VRAM or more to run the 14b parameter model.

| Parameters | Size   |
| ---------- | ------ |
| 1.5b       | 1.1 GB |
| 7b         | 4.7 GB |
| 8b         | 4.9 GB |
| 14b        | 9.0 GB |
| 32b        | 20 GB  |
| 70b        | 43 GB  |
| 671b       | 404 GB |

We can further test this with a couple of commands. First we are going to check how Ollama is actually going to allocate our resources for running the model.

```bash
ollama run deepseek-r1:14b
>>> /bye
ollama ps
NAME               ID              SIZE     PROCESSOR    UNTIL
deepseek-r1:14b    ea35dfe18182    11 GB    100% GPU     4 minutes from now
```

As you can see we are able to fit the full 14b parameter model into the VRAM of our GPU. Next we are going to look at the general performance of the model when we query it. Anything above 10 tokens/s should provide a somewhat acceptable experience for our use case.

```bash
ollama run deepseek-r1:14b --verbose
>>> What is the largest animal in the world?

...

total duration:       13.010056912s
load duration:        12.018553ms
prompt eval count:    12 token(s)
prompt eval duration: 5ms
prompt eval rate:     2400.00 tokens/s
eval count:           534 token(s)
eval duration:        12.992s
eval rate:            41.10 tokens/s
```

## Configuring the Model

Since we already went over how to install Ollama last time I'm not going to reiterate that here, so please refer to the previous entry or the official documentation. Ollama is officially supported as a first-class provider for the plugin and can be configured without issue by passing in the correct options.

```lua
-- Configure provider via plugin options
require('lazy').setup({
  {
    "yetone/avante.nvim",
    ...
    opts = {
      provider = "ollama",
      providers = {
        ollama = {
          endpoint = "http://127.0.0.1:11434",
          model = "deepseek-r1:32b",
        },
      },
    },
    ...
  }
  ...
})
```

## Usage

After we are done with the configuration we can now interact with Avante either by pressing **Leader a a** (the default Neovim leader key is the backslash key) to open the Avante Chat window and entering our question there or alternatively via the **\:AvanteAsk \[question\]** command. Avante will then generate code suggestions in reference to the current file using the configured model which we can then apply one by one.

<video controls>
  <source src="/blog/nvim-avante/avante-01.mp4" type="video/mp4" />
</video>

Another option is to select some code in visual mode and then press the key binding **Leader a e** and specify what we would like to be modified about it to trigger another code suggestion.

<video controls>
  <source src="/blog/nvim-avante/avante-02.mp4" type="video/mp4" />
</video>

## Sources

- [ollama/ollama](https://github.com/ollama/ollama) - Official GitHub Repository
- [avante.nvim](https://github.com/yetone/avante.nvim) - Plugin by yetone.
- [Avante + Ollama #1 - Issue](https://github.com/yetone/avante.nvim/issues/1067#issuecomment-2585550870).
- [Avante + Ollama #2 - Issue](https://github.com/yetone/avante.nvim/issues/1149#issuecomment-2629226723).
