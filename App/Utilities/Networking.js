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
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  .then((res) => {
    result = res.text();
    return Promise.resolve(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .done(() => {
    console.log('result', result);
  });
};

// xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// 'Accept': 'application/json',
// 'Content-Type': 'application/x-www-form-urlencoded',
const xhrPost = (url, data, options) => {
  console.log('[Networking] xhrPost', url, data, options);
  let xhr = new XMLHttpRequest();

  function transferComplete(evt) {
    console.log('The transfer is complete.');
  }

  function transferFailed(evt) {
    console.log('An error occurred while transferring the file.');
  }

  function transferCanceled(evt) {
    console.log('The transfer has been canceled by the user.');
  }

  // xhr.addEventListener("loadend", loadEnd);
  function loadEnd(e) {
    console.log("The transfer finished (although we don't know if it succeeded or not).");
  }

  // const onProgress = (event) => {
  //   console.log(`Uploaded ${event.loaded} of ${event.total}`);
  // };

  function updateProgress(event) {
    if (event.lengthComputable) {
      var percentComplete = (event.loaded / event.total) * 100;
      console.log('sent: ', event.loaded);
      console.log('perecent complete: ', percentComplete);
      console.log(`Uploaded ${event.loaded} of ${event.total}`);
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
    console.log('headers\n\n', headers);
  };

  xhr.onreadystatechange = (e) => {
    if (xhr.readyState === 3) {
      // loading
    }
    if (xhr.readyState === 4) {
      // request finished
    }
    if (xhr.readyState !== 4) {
      // not finished
      return;
    }
    if (xhr.status === 200) {
      console.log('success', xhr.responseText);
    } else {
      console.warn('error', xhr.status, xhr.responseText);
    }
  };

  xhr.upload.addEventListener('load', transferComplete);
  xhr.upload.addEventListener('error', transferFailed);
  xhr.upload.addEventListener('abort', transferCanceled);
  xhr.upload.addEventListener('progress', updateProgress);
  //   or xhr.upload.onprogress

  xhr.onloadend = function() {
    if (xhr.status === 200) {
      console.log('success');
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
      console.log(`Done, got ${xhr.response.length} bytes`);
    }
  };

  xhr.open('POST', url);
  if (options.contentType) {
    xhr.setRequestHeader('Content-Type', options.contentType);
  } else {
    xhr.setRequestHeader('Content-Type', 'multipart/form-data');
  }

  xhr.send(data);
};

export { json2FormData, xhrPost, fetchPostForm };
