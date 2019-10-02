
const obMerge = (base, update, ...override) => {
  const Empty = Object.create(null);
  return Object.assign(Empty, base, update, ...override);
};

const obMergeBare = (base, update, ...override) => {
  const Empty = Object.create(null);
  return Object.assign(Empty, base, update, ...override);
};

const obSerialize = (SimpleObj) => {
  Object.entries(SimpleObj)
  .map(function(a){
    return {
      [`${a[0]}`] : JSON.stringify(a[1]) };
  });
};


/// TRUE / FALSE TYPES
const filterFalse = (obj) => {
  return Object.keys(obj)
    .filter((key)=>{ return obj[key]; })
    .join(',');
};



const object_keys_checksum = (obj) => {
  return Object.getOwnPropertyNames(obj)
  .join('')
  .split('')
  .map((a) => {
    return a.codePointAt(0) - 96;
  })
  .reduce((a, b) => {
    return a + b;
  });
};


const jstring = (data) => {
  return JSON.stringify(data);
};


const ab2str = (buf) => {
  return String.fromCharCode.apply(null, new Uint16Array(buf));
};


const str2ab = (str) => {
  var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
  try {
  } catch (e) {
    var bufView = new Uint16Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  }
};

export {
  obMerge,
  obMergeBare,
  object_keys_checksum,
  obSerialize,
  filterFalse,
  ab2str,
  str2ab,
};
