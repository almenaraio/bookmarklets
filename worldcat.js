javascript:Qr=window.getSelection?window.getSelection().toString():document.selection.createRange().text;if(!Qr){void(Qr=prompt('Enter ISBN-10, e.g. 1439876800:',''))}if(Qr)location.href='https://www.worldcat.org/search?q=bn:'+escape(Qr)