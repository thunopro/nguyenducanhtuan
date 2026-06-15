const kana_dict = {
    'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
    'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
    'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
    'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
    'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no',
    'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
    'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo',
    'や': 'ya', 'ゆ': 'yu', 'よ': 'yo',
    'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro',
    'わ': 'wa', 'を': 'wo',
    'ん': 'n',
    'が': 'ga', 'ぎ': 'gi', 'ぐ': 'gu', 'げ': 'ge', 'ご': 'go',
    'ざ': 'za', 'じ/ぢ': 'ji', 'ず/づ': 'zu', 'ぜ': 'ze', 'ぞ': 'zo',
    'だ': 'da', 'で': 'de', 'ど': 'do',
    'ば': 'ba', 'び': 'bi', 'ぶ': 'bu', 'べ': 'be', 'ぼ': 'bo',
    'ぱ': 'pa', 'ぴ': 'pi', 'ぷ': 'pu', 'ぺ': 'pe', 'ぽ': 'po',

    'きゃ': 'kya', 'きゅ': 'kyu', 'きょ': 'kyo',
    'しゃ': 'sha', 'しゅ': 'shu', 'しょ': 'sho',
    'ちゃ': 'cha', 'ちゅ': 'chu', 'ちょ': 'cho',
    'にゃ': 'nya', 'にゅ': 'nyu', 'にょ': 'nyo',
    'ひゃ': 'hya', 'ひゅ': 'hyu', 'ひょ': 'hyo',
    'みゃ': 'mya', 'みゅ': 'myu', 'みょ': 'myo',
    'りゃ': 'rya', 'りゅ': 'ryu', 'りょ': 'ryo',
    'ぎゃ': 'gya', 'ぎゅ': 'gyu', 'ぎょ': 'gyo',
    'じゃ/ぢゃ': 'ja', 'じゅ/ぢゅ': 'ju', 'じょ/ぢょ': 'jo',
    'びゃ': 'bya', 'びゅ': 'byu', 'びょ': 'byo',
    'ぴゃ': 'pya', 'ぴゅ': 'pyu', 'ぴょ': 'pyo',

    'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o',
    'カ': 'ka', 'キ': 'ki', 'ク': 'ku', 'ケ': 'ke', 'コ': 'ko',
    'サ': 'sa', 'シ': 'shi', 'ス': 'su', 'セ': 'se', 'ソ': 'so',
    'タ': 'ta', 'チ': 'chi', 'ツ': 'tsu', 'テ': 'te', 'ト': 'to',
    'ナ': 'na', 'ニ': 'ni', 'ヌ': 'nu', 'ネ': 'ne', 'ノ': 'no',
    'ハ': 'ha', 'ヒ': 'hi', 'フ': 'fu', 'ヘ': 'he', 'ホ': 'ho',
    'マ': 'ma', 'ミ': 'mi', 'ム': 'mu', 'メ': 'me', 'モ': 'mo',
    'ヤ': 'ya', 'ユ': 'yu', 'ヨ': 'yo',
    'ラ': 'ra', 'リ': 'ri', 'ル': 'ru', 'レ': 're', 'ロ': 'ro',
    'ワ': 'wa', 'ヲ': 'o',
    'ン': 'n',
    'ガ': 'ga', 'ギ': 'gi', 'グ': 'gu', 'ゲ': 'ge', 'ゴ': 'go',
    'ザ': 'za', 'ジ/ヂ': 'ji', 'ズ/ヅ': 'zu', 'ゼ': 'ze', 'ゾ': 'zo',
    'ダ': 'da', 'デ': 'de', 'ド': 'do',
    'バ': 'ba', 'ビ': 'bi', 'ブ': 'bu', 'ベ': 'be', 'ボ': 'bo',
    'パ': 'pa', 'ピ': 'pi', 'プ': 'pu', 'ペ': 'pe', 'ポ': 'po',

    'キャ': 'kya', 'キュ': 'kyu', 'キョ': 'kyo',
    'シャ': 'sha', 'シュ': 'shu', 'ショ': 'sho',
    'チャ': 'cha', 'チュ': 'chu', 'チョ': 'cho',
    'ニャ': 'nya', 'ニュ': 'nyu', 'ニョ': 'nyo',
    'ヒャ': 'hya', 'ヒュ': 'hyu', 'ヒョ': 'hyo',
    'ミャ': 'mya', 'ミュ': 'myu', 'ミョ': 'myo',
    'リャ': 'rya', 'リュ': 'ryu', 'リョ': 'ryo',
    'ギャ': 'gya', 'ギュ': 'gyu', 'ギョ': 'gyo',
    'ジャ/ヂャ': 'ja', 'ジュ/ヂュ': 'ju', 'ジョ/ヂョ': 'jo',
    'ビャ': 'bya', 'ビュ': 'byu', 'ビョ': 'byo',
    'ピャ': 'pya', 'ピュ': 'pyu', 'ピョ': 'pyo',
}

let correct_answer = '';

let started = false;

let correct_answers = 0;
let total_answers = 0;

let pause_score = false;

const table_identifiers = ["#hiragana-table", "#hiragana-combinations-table", "#katakana-table", "#katakana-combinations-table"];
const original_kana_positions = get_kana_positions();

const CORRECT_ANSWER_CLASS = "correct-answer";
const WRONG_ANSWER_CLASS = "wrong-answer";
const ANSWER_RESULT_OPTIONS = [CORRECT_ANSWER_CLASS, WRONG_ANSWER_CLASS];

function check_all(element_selector) {
    let trs = document.querySelector(element_selector);
    let tds = trs.children;
    for (let x = 0; x < tds.length; x++) {
        tds[x].children[0].checked = true;
    }
}

function uncheck_all(element_selector) {
    let trs = document.querySelector(element_selector);
    let tds = trs.children;
    for (let x = 0; x < tds.length; x++) {
        tds[x].children[0].checked = false;
    }
}

function setup_checkalls() {
    document.querySelector("#hiragana-checkall").addEventListener("click", () => {check_all(".hiragana-check")})
    document.querySelector("#hiragana-uncheckall").addEventListener("click", () => {uncheck_all(".hiragana-check")})

    document.querySelector("#hiragana-combinations-checkall").addEventListener("click", () => {check_all(".hiragana-combinations-check")})
    document.querySelector("#hiragana-combinations-uncheckall").addEventListener("click", () => {uncheck_all(".hiragana-combinations-check")})

    document.querySelector("#katakana-checkall").addEventListener("click", () => {check_all(".katakana-check")})
    document.querySelector("#katakana-uncheckall").addEventListener("click", () => {uncheck_all(".katakana-check")})

    document.querySelector("#katakana-combinations-checkall").addEventListener("click", () => {check_all(".katakana-combinations-check")})
    document.querySelector("#katakana-combinations-uncheckall").addEventListener("click", () => {uncheck_all(".katakana-combinations-check")})
}

function get_columns(table_selector) {
    const table = document.querySelector(table_selector);
    const row_length = table.rows[0].cells.length;
    const columns = Array.apply(null, Array(row_length)).map(() => { return []; });

    for (let i = 0; i < table.rows.length; i++) {
        const row = table.rows[i];
        for (let j = 0; j < row.cells.length; j++) {
            const cell = row.cells[j];
            columns[j][i] = cell;
        }
    }
    return columns;
}

function get_checked_table(table_identifier) {
    const columns = get_columns(table_identifier);
    const active = [];
    for (const column of columns) {
        if (!column[0].querySelector(".kanacheck").checked) {
            continue;
        }
        // [0] = column header
        for (let i = 1; i < column.length; i++) {
            const cell_text = column[i].innerText;
            if (cell_text && cell_text.length > 0) {
                active.push([cell_text, kana_dict[cell_text]]);
            }
        }
    }
    return active;
}

function get_checked() {
    const selected_tab = get_selected_tab();
    return [...get_checked_table("#" + selected_tab + "-table"), ...get_checked_table("#" + selected_tab + "-combinations-table")];
}

function get_selected_tab() {
    return document.querySelector("#hiragana-tab").hidden ? "katakana" : "hiragana";
}

function switch_tab(tab_name) {
    const hiragana_tab = document.querySelector("#hiragana-tab");
    const katakana_tab = document.querySelector("#katakana-tab");

    if (tab_name === "hiragana" && !hiragana_tab.hidden) { return; }
    if (tab_name === "katakana" && !katakana_tab.hidden) { return; }

    hiragana_tab.hidden = !hiragana_tab.hidden;
    katakana_tab.hidden = !katakana_tab.hidden;

    const tab_selectors = document.querySelectorAll(".kana-tab-selector");
    for (const tab_selector of tab_selectors) {
        tab_selector.classList.toggle("selected-tab");
    }
    if (started) {
        set_audio();
    }
}

function get_random_character() {
    let character = ['', ''];
    const checked_characters = get_checked();
    let i = 0;
    do {
        character = checked_characters[Math.floor(Math.random() * checked_characters.length)];
        i++;
    } while (character[0] === correct_answer && i < 10);
    return character;
}

function get_enabled_speakers() {
    const speaker_checkboxes = document.querySelectorAll(".speaker-checkbox");
    let enabled_speakers = [];
    for (const speaker_checkbox of speaker_checkboxes) {
        if (speaker_checkbox.checked) {
            enabled_speakers.push(speaker_checkbox.dataset["speakerNumber"]);
        }
    }
    if (enabled_speakers.length === 0) {
        for (const speaker_checkbox of speaker_checkboxes) {
            speaker_checkbox.checked = true;
            enabled_speakers.push(speaker_checkbox.dataset["speakerNumber"]);
        }
    }
    return enabled_speakers;
}

function set_audio() {
    const new_character = get_random_character();
    const kana_audio = document.querySelector("#kana-audio");
    const enabled_speakers = get_enabled_speakers();
    kana_audio.src = "audio/" + enabled_speakers[Math.floor(Math.random() * enabled_speakers.length)] + "/" + new_character[1] + ".mp3";
    correct_answer = new_character[0];
    pause_score = false;
}

function update_score(correct) {
    if (!started || pause_score) {
        return;
    }
    if (correct) {
        correct_answers += 1;
    } else {
        pause_score = true;
    }
    total_answers += 1;
    document.querySelector("#score").textContent = correct_answers + "/" + total_answers;
}

function handle_answer(character) {
    if (character === correct_answer) {
        highlight_answer(character, CORRECT_ANSWER_CLASS, true);
        update_score(true);
        setTimeout(set_audio, 1000);
    } else {
        highlight_answer(character, WRONG_ANSWER_CLASS, true);
        update_score(false);
    }
}

function highlight_answer(answer, highlight_class, allow_persistent) {
    const persistent_highlights = document.querySelector("#persistent-highlights").checked && allow_persistent;
    const kana_boxes = document.querySelectorAll(".kana");
    for (const kana_box of kana_boxes) {
        if (kana_box.innerText === answer) {
            const contains_current_highlight = kana_box.parentElement.classList.contains(highlight_class);
            for (const answer_result_option of ANSWER_RESULT_OPTIONS) {
                kana_box.parentElement.classList.remove(answer_result_option);
            }
            if (contains_current_highlight && persistent_highlights) {
                setTimeout(() => {
                    kana_box.parentElement.classList.add(highlight_class);
                }, 500);
            } else {
                kana_box.parentElement.classList.add(highlight_class);
            }

            if (!persistent_highlights) {
                setTimeout(() => {
                    kana_box.parentElement.classList.remove(highlight_class);
                }, 500);
            }
        }
    }
}

function get_kana_positions() {
    const kana_positions = [];
    for (const table_identifier of table_identifiers) {
        const table = document.querySelector(table_identifier);
        const kana_cells = table.querySelectorAll(".kana");
        kana_positions.push(Array.from(kana_cells).map((x) => { return x.innerText; }));
    }
    return kana_positions;
}

function revert_kana() {
    for (let i = 0; i < table_identifiers.length; i++) {
        const table = document.querySelector(table_identifiers[i]);
        const kana_cells = table.querySelectorAll(".kana");
        for (let j = 0; j < kana_cells.length; j++) {
            kana_cells[j].innerText = original_kana_positions[i][j];
        }
    }
}

function shuffle_kana() {
    for (const table_identifier of table_identifiers) {
        const table = document.querySelector(table_identifier);
        const kana_cells = table.querySelectorAll(".kana");
        const kana_cells_shuffled = get_checked_table(table_identifier).map((x) => x[0]);
        shuffle_array(kana_cells_shuffled);
        let j = 0;
        for (let i = 0; i < kana_cells.length; i++) {
            if (kana_cells_shuffled.includes(kana_cells[i].innerText)) {
                kana_cells[i].innerText = kana_cells_shuffled[j];
                j++;
            }
        }
    }
}

/* Durstenfeld shuffle in-place */
function shuffle_array(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

setup_checkalls();

document.querySelector("#hiragana-tab-selector").addEventListener("click", () => { switch_tab("hiragana") });
document.querySelector("#katakana-tab-selector").addEventListener("click", () => { switch_tab("katakana") });

const kana_items = document.querySelectorAll("td");
for (const kana_item of kana_items) {
    if (kana_item.querySelectorAll("input").length > 0 || kana_item.textContent.length === 0) {
        continue;
    }
    kana_item.addEventListener("click", (e) => {
        const selected_character = e.target.innerText;
        handle_answer(selected_character);
    });
}

document.querySelector("#start-button").addEventListener("click", () => {
    started = true;
    document.querySelector("#start-button").hidden = true;

    const audio = document.querySelector("#kana-audio");
    audio.hidden = false;
    audio.autoplay = true;

    document.querySelector("#reveal-button").hidden = false;
    document.querySelector("#skip-button").hidden = false;
    set_audio();
});

document.querySelector("#skip-button").addEventListener("click", () => {
    set_audio();
});

document.querySelector("#reveal-button").addEventListener("click", () => {
    highlight_answer(correct_answer, "reveal-answer", false);
});

const speaker_buttons = document.querySelectorAll(".speaker-button");
for (const speaker_button of speaker_buttons) {
    speaker_button.addEventListener("click", () => {
        const audio = new Audio("audio/" + speaker_button.dataset["speakerNumber"] + "/" + get_random_character()[1] + ".mp3");
        audio.play();
    });
}

document.querySelector("#shuffle-kana").addEventListener("click", shuffle_kana);
document.querySelector("#revert-kana").addEventListener("click", revert_kana);
