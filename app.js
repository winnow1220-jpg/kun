function pad(n){ return n<10 ? '0'+n : n; }
function b64(s){ return btoa(unescape(encodeURIComponent(s))); }

function openSurvey(O){
  var d = new Date();
  d.setMinutes(d.getMinutes()-1);
  d.setSeconds(0);
  var D = ''+d.getFullYear()+pad(d.getMonth()+1)+pad(d.getDate());
  var T = ''+pad(d.getHours())+pad(d.getMinutes())+pad(d.getSeconds());
  var serial = ''+Math.floor(1e6+Math.random()*9e6);

  var payload = {
    "D": D,
    "Country": "TW",
    "M": "4",
    "S": "886KTWI235",     // 竹北中華
    "O": O,
    "K": "2",
    "T": T,
    "U": "TWI235"+D+serial
  };

  var url = 'https://customer.kfc-listens.com/jfe/form/SV_1R1VSPEYVPlV1JA?Q_EED=' 
            + encodeURIComponent(b64(JSON.stringify(payload)));
  location.href = url;
}