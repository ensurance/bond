Quality Ensurance agent for pull requests in you repository.

## Features

The main goal of this tool is to provide an advanced heuristics for PRs quality:

* PR description
* Title
* Link to specific ticket
* Specs presence
* Checklists

## Getting started

### Files structure
```
├── /src/                       # The source code of the application
│   ├── /base/                  # Base
│   │   └── *.ts                # Base classes files
│   ├── /controllers/           # Controllers
│   │   ├── *.controller.ts     # 
│   │   ├── controller.ts       # Main controllers class
│   │   └── index.ts            # Index file for controllers
│   ├── /initializers/          # Initializers
│   │   ├── *.initializer.ts    # 
│   │   └── index.ts            # Index file for initializers
│   ├── /integrations/          # Integrations
│   │   ├── *.integration.ts    # 
│   │   └── index.ts            # Index file for integrations
│   ├── /schedules/             # Schedules
│   │   ├── *.schedule.ts       # 
│   │   └── index.ts            # Index file for schedules
│   ├── /services/              # Services
│   │   ├── *.service.ts        # 
│   │   └── index.ts            # Index file for services
│   ├── /tasks/                 # Tasks
│   │   ├── *.task.ts           # 
│   │   └── index.ts            # Index file for tasks 
│   ├── bond.ts                 # Main class of bot
│   ├── config.ts               # Configuration
│   ├── routes.ts               # Routes
│   └── server.ts               # Entry point for application
├── /.quality/                  # dot files for libs
├── /test/                      # Tests for components
├── /build/                     # Build files after compilation
├── /public/                    # Project builded and compiled project files
├── /node_modules/              # Node (Brunch) 3rd-party libraries
│
│── package.json                # The list of Node (Brunch) 3rd party libraries
│── tsconfig.json               # TypeScript config file
│── Procfile                    # Foreman start file
│── README.md                   # Project description
│── LICENSE                     # License
│── .env.example                # Env config
│── .editorconfig               # Global editor config
└── .gitignore                  # Git ignored files
```

### Commands

 `npm run development` - Run development server

## Requirements

You need to install [Node](https://nodejs.org/en/), [TypeScript](https://www.typescriptlang.org/);

## Installation

`git clone https://github.com/ensurance/bond`

`cd bond`

`npm install`

`npm run development`

# License

### This code is free to use under the terms of the MIT license.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
