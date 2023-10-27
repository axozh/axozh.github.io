document.getElementById("oncForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var fileInput = document.getElementById('oncFile');
  var file = fileInput.files[0];
  
  var reader = new FileReader();
  reader.onload = function(e) {
    var modifiedContent = modifyONCFile(e.target.result);
    var modifiedBlob = new Blob([modifiedContent], {type: 'application/octet-stream'});
    
    var downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(modifiedBlob);
    downloadLink.download = 'modified.onc';
    downloadLink.click();
  };
  
  reader.readAsText(file);
});

function modifyONCFile(content) {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  var modifiedContent = JSON.parse(content);
  modifiedContent.Certificates[0].X509 = "Modified X509"; // Modify X509 certificate if needed
  modifiedContent.NetworkConfigurations[0].VPN.OpenVPN.Username = username;
  modifiedContent.NetworkConfigurations[0].VPN.OpenVPN.Password = password;
  
  return JSON.stringify(modifiedContent, null, 2);
}

