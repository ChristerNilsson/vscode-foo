// Generated by CoffeeScript 2.3.2
var HH, assert, f, print;

assert = require('assert').deepEqual;

print = console.log;

print('##### begin #####');

HH = {
  '00': '12',
  '13': '01',
  '14': '02',
  '15': '03',
  '16': '04',
  '17': '05',
  '18': '06',
  '19': '07',
  '20': '08',
  '21': '09',
  '22': '10',
  '23': '11'
};

f = function(hhxmm) {
  var ampm, hh, mm;
  hh = hhxmm.slice(0, 2);
  mm = hhxmm.slice(3, 5);
  ampm = hhxmm < '12:00' ? 'AM' : 'PM';
  if (hh in HH) {
    hh = HH[hh];
  }
  return hh + ':' + mm + ' ' + ampm;
};


// f = (hhxmm) ->
// 	time = new Date "2019-05-12 " + hhxmm
// 	time.toLocaleString 'en-US', { hour: 'numeric', minute: 'numeric', hour12: true }
assert('12:00 AM', f('00:00'));

assert('12:01 AM', f('00:01'));

assert('12:59 AM', f('00:59'));

assert('01:00 AM', f('01:00'));

assert('11:59 AM', f('11:59'));

assert('12:00 PM', f('12:00'));

assert('12:01 PM', f('12:01'));

assert('12:59 PM', f('12:59'));

assert('01:00 PM', f('13:00'));

assert('11:59 PM', f('23:59'));

// assert '12:00 AM', f '00:00'
// assert '12:01 AM', f '00:01'
// assert '12:59 AM', f '00:59'
// assert '1:00 AM', f '01:00'
// assert '11:59 AM', f '11:59'
// assert '12:00 PM', f '12:00'
// assert '12:01 PM', f '12:01'
// assert '12:59 PM', f '12:59'
// assert '1:00 PM', f '13:00'
// assert '11:59 PM', f '23:59'
print('#####  end  #####');

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1wbS5qcyIsInNvdXJjZVJvb3QiOiIuLiIsInNvdXJjZXMiOlsiYW1wbS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsRUFBQSxFQUFBLE1BQUEsRUFBQSxDQUFBLEVBQUE7O0FBQUEsTUFBQSxHQUFTLE9BQUEsQ0FBUSxRQUFSLENBQWlCLENBQUM7O0FBQzNCLEtBQUEsR0FBUSxPQUFPLENBQUM7O0FBQ2hCLEtBQUEsQ0FBTSxtQkFBTjs7QUFFQSxFQUFBLEdBQ0M7RUFBQSxJQUFBLEVBQUssSUFBTDtFQUNBLElBQUEsRUFBSyxJQURMO0VBRUEsSUFBQSxFQUFLLElBRkw7RUFHQSxJQUFBLEVBQUssSUFITDtFQUlBLElBQUEsRUFBSyxJQUpMO0VBS0EsSUFBQSxFQUFLLElBTEw7RUFNQSxJQUFBLEVBQUssSUFOTDtFQU9BLElBQUEsRUFBSyxJQVBMO0VBUUEsSUFBQSxFQUFLLElBUkw7RUFTQSxJQUFBLEVBQUssSUFUTDtFQVVBLElBQUEsRUFBSyxJQVZMO0VBV0EsSUFBQSxFQUFLO0FBWEw7O0FBYUQsQ0FBQSxHQUFJLFFBQUEsQ0FBQyxLQUFELENBQUE7QUFDSCxNQUFBLElBQUEsRUFBQSxFQUFBLEVBQUE7RUFBQSxFQUFBLEdBQUssS0FBSyxDQUFDLEtBQU4sQ0FBWSxDQUFaLEVBQWMsQ0FBZDtFQUNMLEVBQUEsR0FBSyxLQUFLLENBQUMsS0FBTixDQUFZLENBQVosRUFBYyxDQUFkO0VBQ0wsSUFBQSxHQUFVLEtBQUEsR0FBUSxPQUFYLEdBQXdCLElBQXhCLEdBQWtDO0VBQ3pDLElBQUcsRUFBQSxJQUFNLEVBQVQ7SUFBaUIsRUFBQSxHQUFLLEVBQUcsQ0FBQSxFQUFBLEVBQXpCOztTQUNBLEVBQUEsR0FBSyxHQUFMLEdBQVcsRUFBWCxHQUFnQixHQUFoQixHQUFzQjtBQUxuQixFQWxCSjs7Ozs7O0FBNkJBLE1BQUEsQ0FBTyxVQUFQLEVBQW1CLENBQUEsQ0FBRSxPQUFGLENBQW5COztBQUNBLE1BQUEsQ0FBTyxVQUFQLEVBQW1CLENBQUEsQ0FBRSxPQUFGLENBQW5COztBQUNBLE1BQUEsQ0FBTyxVQUFQLEVBQW1CLENBQUEsQ0FBRSxPQUFGLENBQW5COztBQUNBLE1BQUEsQ0FBTyxVQUFQLEVBQW1CLENBQUEsQ0FBRSxPQUFGLENBQW5COztBQUNBLE1BQUEsQ0FBTyxVQUFQLEVBQW1CLENBQUEsQ0FBRSxPQUFGLENBQW5COztBQUNBLE1BQUEsQ0FBTyxVQUFQLEVBQW1CLENBQUEsQ0FBRSxPQUFGLENBQW5COztBQUNBLE1BQUEsQ0FBTyxVQUFQLEVBQW1CLENBQUEsQ0FBRSxPQUFGLENBQW5COztBQUNBLE1BQUEsQ0FBTyxVQUFQLEVBQW1CLENBQUEsQ0FBRSxPQUFGLENBQW5COztBQUNBLE1BQUEsQ0FBTyxVQUFQLEVBQW1CLENBQUEsQ0FBRSxPQUFGLENBQW5COztBQUNBLE1BQUEsQ0FBTyxVQUFQLEVBQW1CLENBQUEsQ0FBRSxPQUFGLENBQW5CLEVBdENBOzs7Ozs7Ozs7Ozs7QUFtREEsS0FBQSxDQUFNLG1CQUFOIiwic291cmNlc0NvbnRlbnQiOlsiYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0JykuZGVlcEVxdWFsXHJcbnByaW50ID0gY29uc29sZS5sb2dcclxucHJpbnQgJyMjIyMjIGJlZ2luICMjIyMjJ1xyXG5cclxuSEggPSBcclxuXHQnMDAnOicxMidcclxuXHQnMTMnOicwMSdcclxuXHQnMTQnOicwMidcclxuXHQnMTUnOicwMydcclxuXHQnMTYnOicwNCdcclxuXHQnMTcnOicwNSdcclxuXHQnMTgnOicwNicgXHJcblx0JzE5JzonMDcnXHJcblx0JzIwJzonMDgnXHJcblx0JzIxJzonMDknXHJcblx0JzIyJzonMTAnXHJcblx0JzIzJzonMTEnIFxyXG5cclxuZiA9IChoaHhtbSkgLT5cclxuXHRoaCA9IGhoeG1tLnNsaWNlIDAsMiBcclxuXHRtbSA9IGhoeG1tLnNsaWNlIDMsNVxyXG5cdGFtcG0gPSBpZiBoaHhtbSA8ICcxMjowMCcgdGhlbiAnQU0nIGVsc2UgJ1BNJyBcclxuXHRpZiBoaCBvZiBISCB0aGVuIGhoID0gSEhbaGhdXHJcblx0aGggKyAnOicgKyBtbSArICcgJyArIGFtcG0gXHJcbiBcclxuIyBmID0gKGhoeG1tKSAtPlxyXG4jIFx0dGltZSA9IG5ldyBEYXRlIFwiMjAxOS0wNS0xMiBcIiArIGhoeG1tXHJcbiMgXHR0aW1lLnRvTG9jYWxlU3RyaW5nICdlbi1VUycsIHsgaG91cjogJ251bWVyaWMnLCBtaW51dGU6ICdudW1lcmljJywgaG91cjEyOiB0cnVlIH1cclxuXHJcbmFzc2VydCAnMTI6MDAgQU0nLCBmICcwMDowMCdcclxuYXNzZXJ0ICcxMjowMSBBTScsIGYgJzAwOjAxJ1xyXG5hc3NlcnQgJzEyOjU5IEFNJywgZiAnMDA6NTknXHJcbmFzc2VydCAnMDE6MDAgQU0nLCBmICcwMTowMCdcclxuYXNzZXJ0ICcxMTo1OSBBTScsIGYgJzExOjU5J1xyXG5hc3NlcnQgJzEyOjAwIFBNJywgZiAnMTI6MDAnIFxyXG5hc3NlcnQgJzEyOjAxIFBNJywgZiAnMTI6MDEnXHJcbmFzc2VydCAnMTI6NTkgUE0nLCBmICcxMjo1OSdcclxuYXNzZXJ0ICcwMTowMCBQTScsIGYgJzEzOjAwJ1xyXG5hc3NlcnQgJzExOjU5IFBNJywgZiAnMjM6NTknXHJcblxyXG4jIGFzc2VydCAnMTI6MDAgQU0nLCBmICcwMDowMCdcclxuIyBhc3NlcnQgJzEyOjAxIEFNJywgZiAnMDA6MDEnXHJcbiMgYXNzZXJ0ICcxMjo1OSBBTScsIGYgJzAwOjU5J1xyXG4jIGFzc2VydCAnMTowMCBBTScsIGYgJzAxOjAwJ1xyXG4jIGFzc2VydCAnMTE6NTkgQU0nLCBmICcxMTo1OSdcclxuIyBhc3NlcnQgJzEyOjAwIFBNJywgZiAnMTI6MDAnXHJcbiMgYXNzZXJ0ICcxMjowMSBQTScsIGYgJzEyOjAxJ1xyXG4jIGFzc2VydCAnMTI6NTkgUE0nLCBmICcxMjo1OSdcclxuIyBhc3NlcnQgJzE6MDAgUE0nLCBmICcxMzowMCdcclxuIyBhc3NlcnQgJzExOjU5IFBNJywgZiAnMjM6NTknXHJcblxyXG5wcmludCAnIyMjIyMgIGVuZCAgIyMjIyMnXHJcbiJdfQ==
//# sourceURL=c:\github\vscode-foo\ampm.coffee