export class sidebarData {
  constructor() {
    const keys = [
      'WPH11F22', 'WPH11J22', 'WPH11O22',
      'WPH11F23', 'WPH11J23', 'WPH11O23',
      'WPH11F24', 'WPH11MVAAE', 'WPH11MVAAM',
      'WPH11MVAAH'
    ];

    const questions = Array.from({ length: 10 }, (_, i) => ({
      questionNo: `Question ${i + 1}`,
      questionID: `${i + 1}`
    }));

    for (const key of keys) {
      this[key] = [...questions];
    }
  }
}