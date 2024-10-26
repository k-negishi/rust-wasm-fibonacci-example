console.log('スクリプトがロードされました。');

// Rust/Wasmの初期化と関数のインポート
import init, { fibonacci_rust } from '../pkg/rust_wasm_fibonacci_example.js';

/**
 * フィボナッチ数を再帰的に計算する関数（メモ化なし）
 * @param {number} n - 計算する項数
 * @returns {number} フィボナッチ数
 */
function fibonacciJs(n) {
    return n <= 1 ? n : fibonacciJs(n - 1) + fibonacciJs(n - 2);
}

/**
 * フィボナッチ数列を生成する関数（JavaScript）
 * @param {number} n - 計算する項数
 * @returns {number[]} フィボナッチ数列の配列
 */
function generateFibonacciJavaScript(n) {
    const sequence = [];
    for (let i = 0; i < n; i++) {
        sequence.push(fibonacciJs(i));
    }
    return sequence;
}

/**
 * フィボナッチ数列を生成する関数（Rust Wasm）
 * @param {number} n - 計算する項数
 * @returns {number[]} フィボナッチ数列の配列
 */
function generateFibonacciWasm(n) {
    const sequence = [];
    for (let i = 0; i < n; i++) {
        sequence.push(fibonacci_rust(i));
    }
    return sequence;
}

/**
 * 計算結果を表示する関数
 * @param {string} method - 'javaScript' または 'wasm'
 * @param {number[]} sequence - フィボナッチ数列
 * @param {number} time - 計算にかかった時間（ミリ秒）
 */
function displayResult(method, sequence, time) {
    if (method === 'javaScript') {
        document.getElementById('javaScriptSequence').textContent = sequence.join(', ');
        document.getElementById('javaScriptTime').textContent = `計算にかかった時間: ${time.toFixed(3)} ミリ秒`;
    } else if (method === 'wasm') {
        document.getElementById('wasmSequence').textContent = sequence.join(', ');
        document.getElementById('wasmTime').textContent = `計算にかかった時間: ${time.toFixed(3)} ミリ秒`;
    }
}

/**
 * 計算ボタンのクリックイベントハンドラー
 */
function handleCalculateButtonClick() {
    const input = document.getElementById('numberInput').value;
    const n = parseInt(input, 10);
    console.log('計算する項数:', n);

    // 入力値の検証
    if (isNaN(n) || n < 0) {
        alert('正の整数を入力してください。');
        return;
    }

    // JavaScriptの計算
    const startJavaScript = performance.now();
    const javaScriptSequence = generateFibonacciJavaScript(n);
    const endJavaScript = performance.now();
    const timeJavaScript = endJavaScript - startJavaScript;
    displayResult('javaScript', javaScriptSequence, timeJavaScript);

    // Rust Wasmの計算
    const startWasm = performance.now();
    const wasmSequence = generateFibonacciWasm(n);
    const endWasm = performance.now();
    const timeWasm = endWasm - startWasm;
    displayResult('wasm', wasmSequence, timeWasm);
}

/**
 * 初期化関数: イベントリスナーを設定する
 */
function initHtml() {
    const calculateBtn = document.getElementById('calculateBtn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', handleCalculateButtonClick);
        console.log('計算ボタンのイベントリスナーが設定されました。');
    } else {
        console.error('計算ボタンが見つかりません。');
    }
}

/**
 * Wasmの初期化関数
 */
async function initWasm() {
    await init();
    console.log('Wasmが初期化されました。');
}

// ページが読み込まれたら初期化関数を実行
document.addEventListener('DOMContentLoaded', initHtml);
initWasm();
