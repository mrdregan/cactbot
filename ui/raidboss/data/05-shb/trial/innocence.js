'use strict';

// Innocence Normal
[{
  zoneRegex: {
    en: /^The Crown Of The Immaculate$/,
    cn: /^无瑕灵君歼灭战$/,
  },
  timelineFile: 'innocence.txt',
  triggers: [
    {
      id: 'Inno Realmrazer',
      regex: Regexes.startsUsing({ id: '3E9A', source: 'Innocence', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3E9A', source: 'Innozenz', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3E9A', source: 'Innocence', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3E9A', source: 'イノセンス', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3E9A', source: '无瑕灵君', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3E9A', source: '이노센스', capture: false }),
      condition: function(data) {
        return data.role == 'healer';
      },
      response: Responses.aoe(),
    },
    {
      id: 'Inno Enthrall',
      regex: Regexes.startsUsing({ id: '3E99', source: 'Innocence', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3E99', source: 'Innozenz', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3E99', source: 'Innocence', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3E99', source: 'イノセンス', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3E99', source: '无瑕灵君', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3E99', source: '이노센스', capture: false }),
      alertText: {
        en: 'Look Away, Get Towers',
        de: 'Weg schauen, Türme nehmen',
        cn: '背对BOSS，踩塔',
        fr: 'Regardez ailleurs, prenez une tour',
      },
    },
    {
      id: 'Inno Reprobation Swords 2',
      regex: Regexes.startsUsing({ id: '3EDC', source: 'Innocence', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3EDC', source: 'Innozenz', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3EDC', source: 'Innocence', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3EDC', source: 'イノセンス', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3EDC', source: '无瑕灵君', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3EDC', source: '이노센스', capture: false }),
      // 3 seconds cast time + 9.5 seconds until next sword.
      delaySeconds: 9.5,
      infoText: {
        en: 'Swords!',
        de: 'Schwerter!',
        ja: '剣くるよ',
        fr: 'Epées !',
        cn: '剑!',
        ko: '검 돌아옴!',
      },
    },

    {
      id: 'Inno Shadowreaver',
      regex: Regexes.startsUsing({ id: '3EEA', source: 'Innocence', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3EEA', source: 'Innozenz', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3EEA', source: 'Innocence', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3EEA', source: 'イノセンス', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3EEA', source: '无瑕灵君', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3EEA', source: '이노센스', capture: false }),
      condition: function(data) {
        return data.role == 'healer';
      },
      response: Responses.aoe(),
    },
    {
      id: 'Inno Righteous Bolt',
      regex: Regexes.startsUsing({ id: '3EA3', source: 'Innocence' }),
      regexDe: Regexes.startsUsing({ id: '3EA3', source: 'Innozenz' }),
      regexFr: Regexes.startsUsing({ id: '3EA3', source: 'Innocence' }),
      regexJa: Regexes.startsUsing({ id: '3EA3', source: 'イノセンス' }),
      regexCn: Regexes.startsUsing({ id: '3EA3', source: '无瑕灵君' }),
      regexKo: Regexes.startsUsing({ id: '3EA3', source: '이노센스' }),
      condition: function(data, matches) {
        return matches.target == data.me || data.role == 'healer';
      },
      response: Responses.tankBuster(),
    },
    {
      id: 'Inno Charge',
      regex: Regexes.startsUsing({ id: '3EC7', source: 'Innocence', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3EC7', source: 'Innozenz', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3EC7', source: 'Innocence', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3EC7', source: 'イノセンス', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3EC7', source: '无瑕灵君', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3EC7', source: '이노센스', capture: false }),
      alertText: {
        en: 'Avoid Charge',
        de: 'ausweichen',
        ja: '突進避けて',
        fr: 'Evitez les charges',
        cn: '躲避冲锋',
      },
    },
    {
      id: 'Inno Light Pillar',
      regex: Regexes.ability({ id: '38FC', source: 'Innocence', capture: false }),
      regexDe: Regexes.ability({ id: '38FC', source: 'Innozenz', capture: false }),
      regexFr: Regexes.ability({ id: '38FC', source: 'Innocence', capture: false }),
      regexJa: Regexes.ability({ id: '38FC', source: 'イノセンス', capture: false }),
      regexCn: Regexes.ability({ id: '38FC', source: '无瑕灵君', capture: false }),
      regexKo: Regexes.ability({ id: '38FC', source: '이노센스', capture: false }),
      infoText: {
        en: 'Line Stack',
        de: 'In einer Linie sammeln',
        ja: 'シェア',
        fr: 'Packez-vous en ligne',
        cn: '直线分摊',
        ko: '직선 쉐어',
      },
    },
    {
      id: 'Inno Winged Drop Of Light',
      regex: Regexes.headMarker({ id: '008A' }),
      condition: function(data, matches) {
        return matches.target == data.me;
      },
      alertText: {
        en: 'Circle on YOU',
        de: 'Kreis auf DIR',
        fr: 'Cercle sur vous',
        ja: 'サークルついた',
        cn: '圈圈点你',
      },
    },
    {
      // TODO: is there a left, or do all normal modes rotate right??
      id: 'Inno Soul And Body Right',
      regex: Regexes.startsUsing({ id: '3EB1', source: 'Innocence', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3EB1', source: 'Innozenz', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3EB1', source: 'Innocence', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3EB1', source: 'イノセンス', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3EB1', source: '无瑕灵君', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3EB1', source: '이노센스', capture: false }),
      suppressSeconds: 1,
      infoText: {
        en: 'Rotate Right',
        de: 'Rechts rum rotieren',
        fr: 'Rotation vers la droite',
        cn: '向右旋转',
        ko: '오른쪽으로 도세요',
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Sword of Condemnation': 'Schwert des Urteils',
        'Innocence': 'Innozenz',
      },
      'replaceText': {
        'Winged Reprobation': 'Schwinge des Urteils',
        'Unknown Ability': 'Unknown Ability',
        'Starbirth': 'Sternengeburt',
        'Soul and Body': 'Seele und Körper',
        'Shadowreaver': 'Schattenplünderer',
        'Scold\'s Bridle': 'Schandmal',
        'Rightful Reprobation': 'Rechtmäßige Verurteilung',
        'Righteous Bolt': 'Blitz der Gerechtigkeit',
        '(?<! )Reprobation': 'Verurteilung',
        'Light Pillar': 'Lichtsäule',
        'Holy Trinity': 'Heilige Dreifaltigkeit',
        'Holy Sword': 'Heiliges Schwert',
        'Guiding Light': 'Leitendes Licht',
        'God Ray': 'Göttlicher Strahl',
        'Flaming Sword': 'Flammenschwert',
        'Explosion': 'Explosion',
        'Duel Descent': 'Doppelter Sinkflug',
        'Drop of Light': 'Lichtabfall',
        'Dream of the Rood': 'Traum des Kreuzes',
        'Beatific Vision': 'Seligmachende Schau',
        'Forgiven venery': 'Geläuterte Wollust',
        'Forgiven shame': 'Geläuterte Schande',
        'Realmrazer': 'Weltenzerstörer',
        'Heavenly Host': 'Machtwort',
        'Daybreak': 'Morgengrauen',
        'Enthrall': 'Bezaubern',
        'Sinsphere': 'Sündensphäre',
        '--center--': '--Mitte--',
        '--north--': '--Norden--',
        'Exalted Wing': 'Exaltierte Schwinge',
        'Exalted Plumes': 'Exaltierte Schwaden',
        'Soul And Body': 'Seele und Körper',
        '--add Phase--': '--Add Phase--',
        '--jump--': '--Sprung--',
        'Drop Of Light': 'Lichtabfall',
      },
      '~effectNames': {
        'Physical Vulnerability Up': 'Erhöhte physische Verwundbarkeit',
        'Lightning Resistance Down II': 'Blitzresistenz - (stark)',
        'Embolden': 'Ermutigen',
        'Damage Down': 'Schaden -',
      },
    },
    {
      'locale': 'fr',
      'missingTranslations': true,
      'replaceSync': {
        'Sword Of Condemnation': 'Épée De Condamnation',
        'Forgiven Venery': 'Débauche Pardonnée',
        'Forgiven Shame': 'Déshonneur Pardonné',
        'Innocence': 'Innocence',
      },
      'replaceText': {
        'Winged Reprobation': 'Réprobation ailée',
        'Unknown Ability': 'Unknown Ability',
        'Starbirth': 'Accouchement stellaire',
        'Soul and Body': 'Âme et corps',
        'Shadowreaver': 'Pilleur d\'ombre',
        'Scold\'s Bridle': 'Bride-bavarde',
        'Rightful Reprobation': 'Réprobation légitime',
        'Righteous Bolt': 'Éclair vertueux',
        '(?<! )Reprobation': 'Réprobation',
        'Light Pillar': 'Pilier de lumière',
        'Holy Trinity': 'Sainte Trinité',
        'Holy Sword': 'Épée sacrée',
        'Guiding Light': 'Lumière directrice',
        'God Ray': 'Rayon divin',
        'Flaming Sword': 'Épée du feu des cieux',
        'Explosion': 'Explosion',
        'Enthrall': 'Œil captivant',
        'Duel Descent': 'Double plongeon',
        'Drop of Light': 'Goutte de lumière',
        'Dream of the Rood': 'Le Rêve de la Croix',
        'Beatific Vision': 'Vision béatifique',
        'Forgiven venery': 'débauche pardonnée',
        'Forgiven shame': 'déshonneur pardonné',
        '--sync--': '--Synchronisation--',
        '--Reset--': '--Réinitialisation--',
      },
      '~effectNames': {
        'Physical Vulnerability Up': 'Vulnérabilité physique augmentée',
        'Lightning Resistance Down II': 'Résistance à La Foudre Réduite+',
        'Embolden': 'Enhardissement',
        'Damage Down': 'Malus de dégâts',
      },
    },
    {
      'locale': 'ja',
      'missingTranslations': true,
      'replaceSync': {
        'Schwert des Urteils': '',
        'Innocence': 'イノセンス',
      },
      'replaceText': {
        'Winged Reprobation': '断罪の飛翔',
        'Unknown Ability': 'Unknown Ability',
        'Starbirth': 'スターバース',
        'Soul and Body': 'ソウル・アンド・ボディー',
        'Shadowreaver': 'シャドウリーヴァー',
        'Scold\'s Bridle': 'スコルドブライダル',
        'Rightful Reprobation': '断罪の旋回',
        'Righteous Bolt': 'ジャッジボルト',
        '(?<! )Reprobation': '断罪',
        'Light Pillar': 'ライトピラー',
        'Holy Trinity': 'ホーリートリニティー',
        'Holy Sword': 'ホーリーソード',
        'Guiding Light': 'ガイディングライト',
        'God Ray': 'ゴッドレイ',
        'Flaming Sword': '回転せし炎の剣',
        'Explosion': '爆散',
        'Duel Descent': 'デュアルディセント',
        'Drop of Light': 'ドロップ・オブ・ライト',
        'Dream of the Rood': 'ドリーム・オブ・ザ・ルード',
        'Beatific Vision': 'ビーティフィックビジョン',
        'Forgiven venery': 'フォーギヴン・ヴェナリー',
        'Forgiven shame': 'フォーギヴン・シェイム',
      },
      '~effectNames': {
        'Physical Vulnerability Up': '被物理ダメージ増加',
        'Lightning Resistance Down II': '雷属性耐性低下［強］',
        'Embolden': 'エンボルデン',
        'Damage Down': 'ダメージ低下',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Sword of Condemnation': '断罪之剑',
        'Innocence': '无瑕灵君',
        'Sword Of Condemnation': '断罪之剑',
        'Forgiven Venery': '得到宽恕的情欲',
        'Forgiven Shame': '得到宽恕的耻辱',
      },
      'replaceText': {
        'Winged Reprobation': '断罪飞翔',
        'Starbirth': '创星',
        'Soul and Body': '身心',
        'Shadowreaver': '夺影',
        'Scold\'s Bridle': '毒舌钩',
        'Rightful Reprobation': '断罪回旋',
        'Righteous Bolt': '裁决之雷',
        '(?<! )Reprobation': '(?<! )断罪飞翔',
        'Light Pillar': '光明柱',
        'Holy Trinity': '圣三一',
        'Holy Sword': '神圣剑',
        'Guiding Light': '指明灯',
        'God Ray': '神光',
        'Flaming Sword': '回转火焰剑',
        'Explosion': '爆炸',
        'Duel Descent': '双重降临',
        'Drop of Light': '落光',
        'Dream of the Rood': '十字架之梦',
        'Beatific Vision': '荣福直观',
        'Forgiven venery': '得到宽恕的情欲',
        'Forgiven shame': '得到宽恕的耻辱',
        'Realmrazer': '灭境',
        'Heavenly Host': '天堂君威',
        'Daybreak': '破晓',
        'Enthrall': '迷魂之眼',
        'Sinsphere': '罪恶晶球',
        '--center--': '--中间--',
        '--north--': '--北--',
        'Exalted Wing': '高贵之翼',
        'Exalted Plumes': '羽化',
        'Soul And Body': '身心',
        '--add Phase--': '--小怪--',
        '--jump--': '--跳--',
        'Drop Of Light': '落光',
        '--sync--': '--sync--',
        '--Reset--': '--reset--',
      },
      '~effectNames': {
        'Physical Vulnerability Up': '物理受伤加重',
        'Lightning Resistance Down II': '雷属性耐性大幅降低',
        'Embolden': '鼓励',
        'Damage Down': '伤害降低',
      },
    },
  ],
}];
