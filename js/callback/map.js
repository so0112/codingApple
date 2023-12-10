const complexVar = [
  { parentA: 1, parentB: 'ㅁ' },
  { parentA: 2, parentB: 'ㄴ' },
  { parentA: 3, parentB: 'e' },
  {
    parentA: 4,
    parentB: [
      {
        childrenA: 'c',
        childrenB: 3,
        childrenC: [{ childrenC1: 1, childrenC2: 'a', childrenC3: 'b', childrenC4: 'a3', childrenC5: 1 }],
      },
    ],
  },
];

const mapReturn = complexVar.map((item) => {
  if (item.parentA === 4) {
    return {
      ...item,
    };
  } else {
    return item;
  }
});

console.log('mapReturn :', mapReturn);

// state.gridData[1].columnDefs = defaultColumnDefs[pageID].map((item) => {
//   if (item['headerName'] === '협력업체') {
//     const temp = item['children'].map((el) => {
//       return {
//         ...el,
//         readOnly: true,
//       };
//     });
//     return {
//       ...item,
//       children: temp,
//     };
//   } else {
//     return item;
//   }
// });
