'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: このコメント行より下の項目に注目してください。
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = undefined;

var SKILL_NAME = "豆知識";
var GET_FACT_MESSAGE = "知ってましたか？";
var HELP_MESSAGE = "豆知識を聞きたい時は「豆知識」と、終わりたい時は「おしまい」と言ってください。どうしますか？";
var HELP_REPROMPT = "どうしますか？";
var STOP_MESSAGE = "さようなら";

//=========================================================================================================================================
//「TODO: ここから下のデータを自分用にカスタマイズしてください。」
//=========================================================================================================================================
var data = [
    "小川さんは銀座に秘密の行きつけのお店があるんですよ。",
    "鏑木さんは美味しいお店をたくさん知っていますよ。",
    "竹本さんは会社の家電量販店ですよ。",
    "さとうさんがはんずぼんですごしたいのは思考能力が落ちると考えているからですよ。",
    "竹内さんは会社の事務作業をほとんどやってくれていますよ。",
    "吉峰さんは遅くまで働きすぎなんじゃないかと心配されていますよ。",
    "今頑張れない奴はいつまでたっても頑張れないから今を頑張りましょうね。",
    "みんな知っているかな。英語けんにもサービスを展開するんですよ。",
    "さとうさんのかっている犬の名前はもぐうですよ。",
    "たけもとさんのへやには最近ばーかうんたーがきたんですよ",
    "山本山のひょうこうはひゃくななじゅうはちせんちめーとるらしいですよ",
    "しかのさんはほんとうはバンドマンなんですよ。みんな知らないかもしれませんね、"
];

//=========================================================================================================================================
//この行から下のコードに変更を加えると、スキルが動作しなくなるかもしれません。わかる人のみ変更を加えてください。  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
