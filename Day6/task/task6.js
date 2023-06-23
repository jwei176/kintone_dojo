(() => {
  'use strict';
  kintone.events.on('app.record.create.show', async (event) => {
    const Action = ['あくなき探求', '不屈の心体', '理想への共感', '心を動かす', '知識を増やす', '公明正大'];
    console.log(event);
    //６つのnullフィールドを作成し、Action5+1のコンテントを入れる
    const arrTable = event.record.Table.value;
    const nullTable = {
      'id': null,
      'value': {
        'Action5': {
          'type': 'DROP_DOWN',
          'value': '',
        },
        '課題': {
          'type': 'MULTI_LINE_TEXT',
          'value': '',
        },
        '状況': {
          'type': 'CHECK_BOX',
          'value': ['未振り返り']
        }
      }
    };
    arrTable.shift();

    Object.keys(Action).forEach((i) => {
      arrTable.push(structuredClone(nullTable));
      arrTable[i].value.Action5.value = Action[i];
    });

    return event;
  });
})();