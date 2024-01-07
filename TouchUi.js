//=============================================================================
// TouchUi.js
// ----------------------------------------------------------------------------
// (C)2024 MogamiYuki
// This plugin is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// ----------------------------------------------------------------------------
// Version
// 1.0.0 2024/01/07 初版
// ----------------------------------------------------------------------------
// [Twitter]: https://twitter.com/mogamiyuki_noc
// [GitHub] : https://github.com/mogamiyuki
//=============================================================================

/*:ja
 * @target MZ
 * @url https://github.com/mogamiyuki/RPGMakerMZ-plugins/blob/main/TouchUi.js
 * @plugindesc タッチUIのON/OFFに対応して上部の余白を削除するプラグイン
 * @author 最上ユキ
 *
 * @help タッチUIのON/OFFに対応して上部の余白を削除します。
 *
 * オプションの「タッチUI」設定値によって、以下の制御を行います。
 * ・ON の場合：余白ありに変更
 * ・OFFの場合：余白なしに変更
 *
 * このプラグインには、プラグインコマンドはありません。
 *
 * 利用規約：
 *  作者に無断で改変、再配布が可能で、利用形態（商用、R18利用等）
 *  についても制限はありません。
 *  このプラグインはもうあなたのものです。
 */

(() => {
    'use strict';
    const pluginName = "TouchUi";

    const ButtonAreaHeightSwitch = Scene_Base.prototype.buttonAreaHeight;
    Scene_Base.prototype.buttonAreaHeight = function() {
      if (ConfigManager.touchUI) {
        return 52;
      } else {
        return 0;
      }
    };
})();