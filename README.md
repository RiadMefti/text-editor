# Text Editor

A desktop text and code editor built with Tauri, React, and TypeScript.

## Features

- **Code editing** with syntax highlighting (JavaScript, Python, HTML, CSS) via CodeMirror
- **Rich text editing** for .txt files (bold, italic, lists, headings, links, etc.) via Tiptap
- **Image viewer** for png, jpg, gif files
- **Folder browser** side panel with tree view
- **Command palette** (Cmd+P)
- **Autosave** on edit
- Cross-platform (macOS, Windows, Linux)

## Shortcuts

| Shortcut | Action |
|---|---|
| Cmd+O | Open folder |
| Cmd+Shift+O | Open file |
| Cmd+Shift+C | New file |
| Cmd+S | Save |
| Cmd+P | Command palette |
| Cmd+B | Toggle side panel |
| Shift+Tab | Change tab |

## Dev Setup

Requires [Rust](https://www.rust-lang.org/tools/install) and [Node.js](https://nodejs.org/).

```
npm install
npm run tauri dev
```

## Build

```
npm run tauri build
```

## Stack

- [Tauri](https://tauri.app/) - Desktop framework
- [React](https://react.dev/) + TypeScript - Frontend
- [CodeMirror 6](https://codemirror.net/) - Code editor
- [Tiptap](https://tiptap.dev/) - Rich text editor
- [Mantine](https://mantine.dev/) - UI components
- [Zustand](https://zustand-demo.pmnd.rs/) - State management
