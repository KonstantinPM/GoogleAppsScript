function doGet(request) {
  
  var SS_id = request.parameter.ss,
      sheet_name = request.parameter.list;
  
  var spreadsheet = SpreadsheetApp.openById(SS_id),
      sheet = spreadsheet.getSheetByName(sheet_name),
      dataRange = sheet.getDataRange().getValues();
  
  var height = dataRange.length,
      width = dataRange[0].length;
  
  var title = dataRange[0];
  
  var xml = "<data>";
  for(var i=1; i < height; i++){
    xml = xml + "<row>";
    for(var j=0; j < width; j++){
      xml = xml + '<column id="'+title[j]+'">'+dataRange[i][j]+"</column>";
        }
    xml = xml + "</row>";     
      }
  xml = xml + "</data>";
  
  return ContentService.createTextOutput(xml).setMimeType(ContentService.MimeType.XML);
}
