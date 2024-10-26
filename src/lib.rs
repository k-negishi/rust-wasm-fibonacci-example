use wasm_bindgen::prelude::wasm_bindgen;

/**
* フィボナッチ数列を計算する関数
*/
#[wasm_bindgen]
pub fn fibonacci_rust(n: u32) -> u32 {
    return if  n <= 1 {
        n
    } else {
        fibonacci_rust(n - 1) + fibonacci_rust(n - 2)
    }
}
