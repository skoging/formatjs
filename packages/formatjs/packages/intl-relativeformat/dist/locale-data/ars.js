/* @generated */	
IntlRelativeFormat.__addLocaleData({"locale":"ars","pluralRuleFunction":function(n
) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n,
      n100 = t0 && s[0].slice(-2);
  return (n == 0) ? 'zero'
      : (n == 1) ? 'one'
      : (n == 2) ? 'two'
      : ((n100 >= 3 && n100 <= 10)) ? 'few'
      : ((n100 >= 11 && n100 <= 99)) ? 'many'
      : 'other';
},"fields":{"year":{"displayName":"Year","relative":{"0":"this year","1":"next year","-1":"last year"},"relativeTime":{"future":{"other":"+{0} y"},"past":{"other":"-{0} y"}}},"year-short":{"displayName":"Year","relative":{"0":"this year","1":"next year","-1":"last year"},"relativeTime":{"future":{"other":"+{0} y"},"past":{"other":"-{0} y"}}},"month":{"displayName":"Month","relative":{"0":"this month","1":"next month","-1":"last month"},"relativeTime":{"future":{"other":"+{0} m"},"past":{"other":"-{0} m"}}},"month-short":{"displayName":"Month","relative":{"0":"this month","1":"next month","-1":"last month"},"relativeTime":{"future":{"other":"+{0} m"},"past":{"other":"-{0} m"}}},"week":{"displayName":"Week","relativePeriod":"the week of {0}","relative":{"0":"this week","1":"next week","-1":"last week"},"relativeTime":{"future":{"other":"+{0} w"},"past":{"other":"-{0} w"}}},"week-short":{"displayName":"Week","relativePeriod":"the week of {0}","relative":{"0":"this week","1":"next week","-1":"last week"},"relativeTime":{"future":{"other":"+{0} w"},"past":{"other":"-{0} w"}}},"day":{"displayName":"Day","relative":{"0":"today","1":"tomorrow","-1":"yesterday"},"relativeTime":{"future":{"other":"+{0} d"},"past":{"other":"-{0} d"}}},"day-short":{"displayName":"Day","relative":{"0":"today","1":"tomorrow","-1":"yesterday"},"relativeTime":{"future":{"other":"+{0} d"},"past":{"other":"-{0} d"}}},"hour":{"displayName":"Hour","relative":{"0":"this hour"},"relativeTime":{"future":{"other":"+{0} h"},"past":{"other":"-{0} h"}}},"hour-short":{"displayName":"Hour","relative":{"0":"this hour"},"relativeTime":{"future":{"other":"+{0} h"},"past":{"other":"-{0} h"}}},"minute":{"displayName":"Minute","relative":{"0":"this minute"},"relativeTime":{"future":{"other":"+{0} min"},"past":{"other":"-{0} min"}}},"minute-short":{"displayName":"Minute","relative":{"0":"this minute"},"relativeTime":{"future":{"other":"+{0} min"},"past":{"other":"-{0} min"}}},"second":{"displayName":"Second","relative":{"0":"now"},"relativeTime":{"future":{"other":"+{0} s"},"past":{"other":"-{0} s"}}},"second-short":{"displayName":"Second","relative":{"0":"now"},"relativeTime":{"future":{"other":"+{0} s"},"past":{"other":"-{0} s"}}}}})