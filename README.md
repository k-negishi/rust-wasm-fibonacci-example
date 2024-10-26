# Rust/Wasm Fibonacci Example

This repository is a sample project that calculates the Fibonacci sequence using Rust and Wasm(WEBAssembly).

From an HTML file, a Rust/Wasm function is called via JavaScript to compute the Fibonacci sequence.
For comparison purposes, a JavaScript function to calculate the Fibonacci sequence is also implemented to compare the performance between JavaScript and Rust/Wasm.

## Tech Stack
- Rust
- Wasm(WEBAssembly)
- JavaScript

## Public URL
https://wasm-fibonacci-example.s3.ap-northeast-1.amazonaws.com/rust/index.html

## Set up the Environment

1. Install [Rust](https://www.rust-lang.org/tools/install).
    ```
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
    ```
2. Install [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/).
    ```
    curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
    ```


## Build
```bash
wasm-pack build --target web
```

### Output Directory
After building, files are generated in the following directory:

```
.
└─ pkg
    ├── rust-wasm-fibonacci-example-wasm-js.mjs
    ├── rust-wasm-fibonacci-example-wasm-js.uninstantiated.mjs
    ├── rust-wasm-fibonacci-example-wasm-js.wasm
    └── rust-wasm-fibonacci-example-wasm-js.wasm.map
```

## File Descriptions

The Fibonacci sequence calculation logic is implemented in `src/lib.rs`.
Opening `static/index.html` in a browser displays the Fibonacci calculation application.

## Other Repositories
kotlin-wasm-fibonacci-example: https://github.com/k-negishi/kotlin-wasm-fibonacci-example