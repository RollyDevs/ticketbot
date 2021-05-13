//https://github.com/RollyDevs
//.env dosyasına tokeninizi yazın
var ticketkanalid = "ticketkanalidyazın";//yazmazsanız çalışmaz
var yetkiliid = "yetkiliidyazın";//yazmazsanız çalışmaz


















var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;

var Discord = require('discord.js');
var client = new Discord.Client();
var talkedRecently = new Set();
var db = require('quick.db');
var fs = require('fs');
client.on('ready', function () {
    console.log("Aktif!");
});
client.on('message', function (message) { return __awaiter(_this, void 0, void 0, function () {
    var sayı;
    var _this = this;
    return __generator(this, function (_a) {
        if (message) {
            if (message.channel.id !== ticketkanalid)
                return [2 /*return*/];
            sayı = db.fetch("say\u0131." + message.guild.id) || 0;
            message.guild.channels.create("talep-" + (sayı + 1)).then(function (s) { return __awaiter(_this, void 0, void 0, function () {
                var everyone;
                return __generator(this, function (_a) {
                    db.add("say\u0131." + message.guild.id, 1);
                    everyone = message.guild.roles.cache.find(function (r) { return r.name === "@everyone"; });
                    s.createOverwrite(everyone, { 'VIEW_CHANNEL': false });
                    s.createOverwrite(message.author, { 'VIEW_CHANNEL': true, 'SEND_MESSAGES': true });
                    s.createOverwrite(yetkiliid, { 'VIEW_CHANNEL': true, 'SEND_MESSAGES': true });
                    client.channels.cache.get(s.id).send(new Discord.MessageEmbed()
                        .setDescription("**Destek Sebebi: " + message.content + "** \n **Destek Talebini Kapatmak \u0130\u00E7in talep kapat Yaz\u0131n\u0131z**", "\n                \n                \n\n                "));
                    return [2 /*return*/];
                });
            }); });
        }
        return [2 /*return*/];
    });
}); });
client.on('message', function (message) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (message.channel.id !== ticketkanalid)
            return [2 /*return*/];
        message["delete"]();
        return [2 /*return*/];
    });
}); });
client.on('message', function (message) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (message.content.toLocaleLowerCase() == "talep kapat") {
            if (!message.channel.name.startsWith("talep"))
                return [2 /*return*/, message.channel.send(new Discord.MessageEmbed()
                        .setDescription("**Bu Komut Sadece Destek Taleplerinde Kullan\u0131labilir**"))];
            message.channel["delete"]();
        }
        return [2 /*return*/];
    });
}); });
client.on('message', function (message) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (message.content.toLocaleLowerCase() == "kanal kapat") {
        }
        return [2 /*return*/];
    });
}); });
client.login(process.env.token);
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
