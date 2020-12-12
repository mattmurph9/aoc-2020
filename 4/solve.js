const solve1 = (input) => (
  input.filter(passport => (
    passport.includes('byr:')
         && passport.includes('iyr:')
         && passport.includes('eyr:')
         && passport.includes('hgt:')
         && passport.includes('hcl:')
         && passport.includes('ecl:')
         && passport.includes('pid:')
  )).length
);

const solve2 = (input) => {
  const validPassports = input.filter(passport => {
    if ( !(passport.includes('byr:')
         && passport.includes('iyr:')
         && passport.includes('eyr:')
         && passport.includes('hgt:')
         && passport.includes('hcl:')
         && passport.includes('ecl:')
         && passport.includes('pid:')) )
    {
      return false;
    }
    const fields = passport.split(/\s+/);
    return fields.every(field => {
      const [type, data] = field.split(':');
      switch(type) {
        case 'byr':
          const birthYear = parseInt(data);
          return birthYear && birthYear >= 1920 && birthYear <= 2002;
        case 'iyr':
          const issueYear = parseInt(data);
          return issueYear && issueYear >= 2010 && issueYear <= 2020;
        case 'eyr':
          const expiryYear = parseInt(data);
          return expiryYear && expiryYear >= 2020 && expiryYear <= 2030;
        case 'hgt':
          const unit = data.slice(-2);
          const measure = parseInt(data.substring(0, data.length - 2));
          if (unit === 'cm') {
            return measure && measure >= 150 && measure <= 193;
          } else if (unit === 'in') {
            return measure && measure >= 59 && measure <= 76;
          }
          return false;
        case 'hcl':
          return /^#[0-9a-f]{6}$/i.test(data);
        case 'ecl':
          return data === 'amb' || data === 'blu' || data === 'brn'
              || data === 'gry' || data === 'grn' || data === 'hzl'
              || data === 'oth';
        case 'pid':
          return parseInt(data) && data.length === 9;
        default:
          return true;
      }
    });
  });
  return validPassports.length;
}

module.exports = { solve1, solve2 }