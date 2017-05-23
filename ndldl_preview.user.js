// ==UserScript==
// @name        ndldl_preview
// @description 国立国会図書館デジタルコレクション検索結果サムネイルのプレビュー
// @author      2SC1815J
// @released    2017-05-21
// @license     MIT License
// @namespace   https://github.com/2SC1815J
// @homepageURL https://github.com/2SC1815J/ndldl_preview
// @include     http://dl.ndl.go.jp/search/*
// @require     https://gist.githubusercontent.com/BrockA/2625891/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// @require     https://code.jquery.com/jquery-1.12.4.min.js
// @require     https://code.jquery.com/ui/1.9.2/jquery-ui.min.js
// @grant       GM_addStyle
// @version     0.2
// ==/UserScript==

(function ($) {
    this.$ = this.jQuery = jQuery.noConflict(true);
    GM_addStyle('.custom-tooltip { position: absolute; padding: 1px; opacity: 1; box-shadow: 0px 0px 5px #666666; }');
    waitForKeyElements(
        '#search-result-list',
        resultListCallbackFunction
    );
    function resultListCallbackFunction() {
        $('#search-result-list').tooltip({
            items: '[src]',
            content: function() {
                return $(this).prop('outerHTML');
            },
            show: false,
            position: {
                my: 'left top',
                at: 'right bottom'
            },
            tooltipClass: 'custom-tooltip'
        });
    }
})(jQuery);
