

const json2FormData = (json) => {
  let form = new FormData();
  for (let entry of Object.entries(json)) {
    if (!typeof entry[0] === 'string') {
      console.log(`issue with form key ${entry[0]}`);
    }
    form.append(entry[0], entry[1]);
  }
  return form;
};



const fetchPostForm = async (url, formData) => {
  let result = null;
  let upload = fetch(url, {
    method: 'POST',
    body: formData,
    headers: { 'Content-Type': 'multipart/form-data' },
    // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  })
  .then((res) => {
    return res.text();
  })
  .catch((error) => { console.error(error) })
  .done(() => { console.log('result', result, upload) })
};



const xhrPost = (url, data, options) => {
  let xhr = new XMLHttpRequest();
  function transferComplete(evt) { console.log('The transfer is complete.', evt) }
  function transferFailed(evt) { console.log('An error occurred while transferring the file.', evt) }
  function transferCanceled(evt) {console.log('The transfer has been canceled by the user.', evt) }
  function loadEnd(evt) { console.log('The transfer finished', evt) }
  function updateProgress(evt) {
    if (evt.lengthComputable) {
      var percentComplete = (evt.loaded / evt.total) * 100;
      console.log('[xhr progress] sent: ', evt.loaded);
      console.log('[xhr progress] perecent complete: ', percentComplete);
      console.log(`[xhr progress] Uploaded ${evt.loaded} of ${evt.total}`);
    } else {
      // Unable to compute progress information since the total size is unknown
    }
  }


  const logResHeaders = (headers) => {
    if (headers) {
      headers = headers.split('\r\n').reduce((result, current) => {
        let [name, value] = current.split(': ');
        result[name] = value;
        return result;
      }, {});
    }
    console.log('headers', headers);
  };

  xhr.onreadystatechange = (e) => {
    if (xhr.readyState === 3) { /* loading */ }
    if (xhr.readyState === 4) { /* request finished */ }
    if (xhr.readyState !== 4) { /* not finished */
      return;
    }
    if (xhr.status === 200) {
      loadEnd(xhr);
      console.log('success', xhr.responseText);
    } else {
      console.warn('error', xhr.status, xhr.responseText);
    }
  };

  xhr.upload.addEventListener('load', transferComplete);
  xhr.upload.addEventListener('error', transferFailed);
  xhr.upload.addEventListener('abort', transferCanceled);
  xhr.upload.addEventListener('progress', updateProgress);

  xhr.onloadend = function() {
    if (xhr.status === 200) {
      console.log('complete', this.response, this.responseText, this.responseType);
    } else {
      console.log('error ' + this.status);
    }
  };

  xhr.onload = function() {
    if (xhr.status !== 200) {
      console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
      let headers = xhr.getAllResponseHeaders();
      logResHeaders(headers);
      console.log(`Status ${xhr.status}: ${xhr.statusText}`);
      console.log(`Received ${xhr.response.length} bytes`);
    }
  };

  // let testUrl = 'http://localhost:5000/api/soundscape/upload-android.php';
  // let testUrl = 'http://localhost:5000/soundscape-android.php';
  // xhr.open('POST', testUrl, true);

  xhr.open('POST', url);

  if (options.contentType) {
    xhr.setRequestHeader('Content-Type', options.contentType);
  } else {
    // xhr.setRequestHeader('Content-Type', 'multipart/form-data');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  }

  // if (options.accept) {
  //   xhr.setRequestHeader('Accept', options.accept);
  // }

  xhr.send(data);
};

export { json2FormData, xhrPost, fetchPostForm };
