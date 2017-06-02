var cur_value = 0;
var is_clear = false;

function bodyLoad(){
  let keys = document.getElementsByClassName("key");
  for(let i=0;i<keys.length;++i){
    keys[i].addEventListener("click",keyClick);
  }
  var x = [1,2,3];
}

function keyClick(){
  switch(this.id){
    case "key_clear":
      clearDisplay();
    break;
    case "key_equal":
      calcValue();
      is_clear = true;
      break;
    default:
        if(is_clear){
          clearDisplay();
        }
        document.getElementById("display").innerHTML +=
          this.innerHTML;
    break;
  }
}

function clearDisplay(){
  document.getElementById("display").innerHTML = "";
  cur_value = 0;
  is_clear = false;
}

function calcValue(){
  var calc_str = document.getElementById("display").innerHTML + '$';
  var opts = [];
  var vals = [];
  var tp_val = "";
  for(let i=0;i<calc_str.length;++i){
    switch(calc_str[i]){
      case '+':
      case '-':
      case "×":
      case "÷":
      case '$':
        vals.push(parseFloat(tp_val));
        tp_val = "";

        let opt_cur = getOptValue(calc_str[i]);
        while(opts.length){
          let opt_pre = getOptValue(opts[opts.length-1]);
          if(opt_cur > opt_pre){
            // opts.push(calc_str[i]);
            break;
          }
          else{
            let val2 = vals.pop();
            let val1 = vals.pop();
            let val3 = 0;
            switch(opts[opts.length-1]){
              case '+':val3=val1+val2;break;
              case '-':val3=val1-val2;break;
              case '×':val3=val1*val2;break;
              case '÷':val3=val1/val2;break;
            }
            vals.push(val3);
            opts.pop();
          }
        }
        opts.push(calc_str[i]);
        break;
      default:
        tp_val += calc_str[i];
        break;
    }
  }
  document.getElementById("display").innerHTML = vals[vals.length-1];
}

function getOptValue(opt){
  let ret = 0;
  switch(opt){
    case '$':
      ret = 0;
    break;
    case '+':
    case '-':
      ret = 10;
      break;
    case '×':
    case '÷':
      ret = 20;
      break;
    default:
      break;
  }
  return ret;
}
