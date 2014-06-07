// Generated by CoffeeScript 1.6.2
/*
// ==UserScript==
// @name        NicoRanCat
// @namespace   http://www.atomer.sakura.ne.jp
// @description ニコニコ動画ランキングのカテゴリーメニュー補完
// @include     http://www.nicovideo.jp/ranking/*
// @version     0.1.3
// ==/UserScript==
*/

var BASE_REG_STR, BASE_URL, CURRENT_PAGE_CAT, PERIOD, PERIOD_REG, SUB_CATEGORY_INFO, TARGET, TARGET_REG, attachToggleMenuEvent, catMain, catSubArea, getBaseURL, getCategory, getCategoryListHTML, getPeriod, getTarget, i, nav, subCategory, _i, _ref;

SUB_CATEGORY_INFO = {
  all: {},
  g_ent2: {
    g_ent2: "合算",
    ent: "エンターテイメント",
    music: "音楽",
    sing: "歌ってみた",
    play: "演奏してみた",
    dance: "踊ってみた",
    vocaloid: "VOCALOID",
    nicoindies: "ニコニコインディーズ"
  },
  g_life2: {
    g_life2: "合算",
    animal: "動物",
    cooking: "料理",
    nature: "自然",
    travel: "旅行",
    sport: "スポーツ",
    lecture: "ニコニコ動画講座",
    drive: "車載動画",
    history: "歴史"
  },
  g_politics: {
    g_politics: "合算"
  },
  g_tech: {
    g_tech: "合算",
    science: "科学",
    tech: "ニコニコ技術部",
    handcraft: "ニコニコ手芸部",
    make: "作ってみた"
  },
  g_culture2: {
    g_culture2: "合算",
    anime: "アニメ",
    game: "ゲーム",
    toho: "東方",
    imas: "アイドルマスター",
    radio: "ラジオ",
    draw: "描いてみた"
  },
  g_other: {
    g_other: "合算",
    are: "例のアレ",
    diary: "日記",
    other: "その他"
  }
};

BASE_REG_STR = "(?:http://www.nicovideo.jp)?/ranking/(?:fav|view|res|mylist)/(?:hourly|daily|weekly|monthly|total)";

TARGET_REG = "(?:http://www.nicovideo.jp)?/ranking/(fav|view|res|mylist)/(?:hourly|daily|weekly|monthly|total)";

PERIOD_REG = "(?:http://www.nicovideo.jp)?/ranking/(?:fav|view|res|mylist)/(hourly|daily|weekly|monthly|total)";

/*
リストのHTML取得
*/


getCategoryListHTML = (function() {
  var LIST;

  LIST = '<li class="${selected}"><a href="http://www.nicovideo.jp/ranking/${target}${period}${category}">${label}</a></li>';
  return function(target, period, category, label, isSelected) {
    var s;

    s = LIST;
    s = s.replace("${target}", target + "/");
    s = s.replace("${period}", period + "/");
    s = s.replace("${category}", category);
    s = s.replace("${label}", label);
    s = s.replace("${selected}", (isSelected ? "current" : ""));
    return s;
  };
})();

/*
カテゴリーを抜いたベースとなるURLを抽出
*/


getBaseURL = (function() {
  var REG;

  REG = new RegExp("^(" + BASE_REG_STR + ")/");
  return function(url) {
    var a;

    a = url.match(REG);
    return a[1];
  };
})();

/*
URLから期間取得
*/


getPeriod = (function() {
  var REG;

  REG = new RegExp(PERIOD_REG);
  return function(url) {
    var a;

    a = url.match(REG);
    return a[1];
  };
})();

/*
URLからランキング対象取得
*/


getTarget = (function() {
  var REG;

  REG = new RegExp(TARGET_REG);
  return function(url) {
    var a;

    a = url.match(REG);
    return a[1];
  };
})();

/*
URLからカテゴリー取得
*/


getCategory = (function() {
  var REG;

  REG = new RegExp(BASE_REG_STR + "/([a-z0-9_]+)");
  return function(url) {
    var a;

    a = url.match(REG);
    if (a) {
      return a[1];
    } else {
      return "";
    }
  };
})();

/*
トグルメニューイベント設定
*/


attachToggleMenuEvent = function(menu, target, period, isCurrent) {
  var cat, info;

  cat = getCategory(menu.querySelector("a").href);
  info = SUB_CATEGORY_INFO[cat];
  return menu.addEventListener("mouseover", (function() {
    var catList, cathtmlList, el, i, list, p, ul, _i, _len, _ref;

    catList = subCategory();
    _ref = catList.parentNode.querySelectorAll("._nicorancat_list");
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      el = _ref[_i];
      el.style.display = "none";
    }
    list = catList.parentNode.querySelector("._nicorancat_list_" + cat);
    if (!list) {
      cathtmlList = [];
      for (i in info) {
        cathtmlList.push(getCategoryListHTML(target, period, i, info[i], isCurrent && i === CURRENT_PAGE_CAT));
      }
      if (!cathtmlList.length) {
        p = document.createElement("p");
        p.innerHTML = "　";
        list = p;
      } else {
        ul = document.createElement("ul");
        ul.innerHTML = cathtmlList.join("");
        list = ul;
      }
      list.className += "navigation _nicorancat_list _nicorancat_list_" + cat;
      catList.parentNode.insertBefore(list, catList);
    } else {
      list.style.display = "block";
    }
  }), false);
};

/*
サブカテゴリーの取得
*/


subCategory = function() {
  var child;

  child = catSubArea.querySelector("._nicorancat_list");
  if (!child) {
    child = catSubArea.querySelector(".navigation,.description");
    if (child.className.indexOf("_nicorancat_list") === -1) {
      child.className += " _nicorancat_list";
    }
  }
  return child;
};

nav = document.querySelector(".navigation");

catMain = nav.querySelectorAll("li") || [];

catSubArea = document.querySelector(".complementary");

BASE_URL = getBaseURL(location.pathname);

CURRENT_PAGE_CAT = getCategory(location.pathname);

PERIOD = getPeriod(location.pathname);

TARGET = getTarget(location.pathname);

for (i = _i = 0, _ref = catMain.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
  attachToggleMenuEvent(catMain[i], TARGET, PERIOD, catMain[i].className.indexOf("current") !== -1);
}