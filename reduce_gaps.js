const fs = require('fs');
let css = fs.readFileSync('app/globals.css', 'utf8');

// Reduce gaps in Hero Section
// Current: .hero-modern padding is usually large.
css = css.replace(/\.hero-modern\s*{[\s\S]*?}/, (match) => {
  if (match.includes('padding:')) {
    return match.replace(/padding:[^;]+;/, 'padding: 40px 20px 20px;');
  }
  return match.replace('{', '{\n  padding: 40px 20px 20px;');
});

// Reduce gap above quote (hero-quote margin)
css = css.replace(/\.hero-quote\s*{[\s\S]*?}/, (match) => {
  if (match.includes('margin-top:')) {
    return match.replace(/margin-top:[^;]+;/, 'margin-top: 20px;');
  } else if (match.includes('margin:')) {
    return match.replace(/margin:[^;]+;/, 'margin: 20px auto 0;');
  }
  return match.replace('{', '{\n  margin-top: 20px;');
});

// Reduce Video Section padding/margin
css = css.replace(/\.video-section\s*{[\s\S]*?}/, (match) => {
  if (match.includes('padding:')) {
    return match.replace(/padding:[^;]+;/, 'padding: 30px 20px;');
  }
  return match.replace('{', '{\n  padding: 30px 20px;');
});

// Make video heading smaller
css = css.replace(/\.section-title\s*{[\s\S]*?}/, (match) => {
  let res = match;
  if (res.includes('font-size:')) {
    res = res.replace(/font-size:\s*2\.\d+rem;/, 'font-size: 1.8rem;');
  } else {
    res = res.replace('{', '{\n  font-size: 1.8rem;');
  }
  if (res.includes('margin-bottom:')) {
    res = res.replace(/margin-bottom:\s*\d+px;/, 'margin-bottom: 20px;');
  }
  return res;
});

// Reduce Today's Message section gap
css = css.replace(/\.message-section\s*{[\s\S]*?}/, (match) => {
  if (match.includes('padding:')) {
    return match.replace(/padding:[^;]+;/, 'padding: 30px 20px;');
  }
  return match.replace('{', '{\n  padding: 30px 20px;');
});

// Reduce general container padding if present
css = css.replace(/\.business-detailed-section\s*{[\s\S]*?}/, (match) => {
  if (match.includes('padding:')) {
    return match.replace(/padding:[^;]+;/, 'padding: 30px 20px;');
  }
  return match.replace('{', '{\n  padding: 30px 20px;');
});

fs.writeFileSync('app/globals.css', css, 'utf8');
console.log('Gaps and heading sizes reduced');
