const textArea = document.querySelector("textarea");

const onlyFrameMargin = () => {
  textArea.textContent = `@color b
@echo off 
set pwshcmd=powershell -noprofile -command "&{[System.Reflection.Assembly]::LoadWithPartialName('System.windows.forms') | Out-Null;$OpenFileDialog = New-Object System.Windows.Forms.OpenFileDialog; $OpenFileDialog.ShowDialog()|out-null; $OpenFileDialog.FileName}"

for /f "delims=" %%I in ('%pwshcmd%') do set "FileName=%%I"

set FnS=Dosya secilmedigi icin program kapatildi.

IF [%FileName%]==[]  start cmd /c "@echo off & mode con cols=70 lines=10 & @color b & echo - %FnS% - & pause>nul" & exit


@echo *******************************************************************************************************************

@color b
@echo Oncelikle videonuzun isminde ve klasorlerinizde bosluk olmamasina dikkat ediniz. Aksi halde program calismayacaktir.

@echo *******************************************************************************************************************

@echo Lutfen bosluk miktarini giriniz! (3 - 10) :
@set /p margins=
@cls  

@echo *******************************************************************************************************************
@color b
@echo Son olarak bu videoyu nerede kullanmak istediginizi secin  

@echo *******************************************************************************************************************

@echo Premiere Pro ve DavinciResolve icin (-exp), Final-Cut-Pro icin (--export final-cut-pro), mp4 cikti icin bos birakin  :
@set /p export=
@cls  

@echo __________________________________________________________________________________________________

@echo Belirtmis oldugunuz adress : %FileName%
auto-editor %FileName% %export% --frame-margin %margins%

@pause`;
};

const onlyMargin = () => {
  fileName = "margin";

  textArea.textContent = `@color b
@echo off 
set pwshcmd=powershell -noprofile -command "&{[System.Reflection.Assembly]::LoadWithPartialName('System.windows.forms') | Out-Null;$OpenFileDialog = New-Object System.Windows.Forms.OpenFileDialog; $OpenFileDialog.ShowDialog()|out-null; $OpenFileDialog.FileName}"

for /f "delims=" %%I in ('%pwshcmd%') do set "FileName=%%I"

set FnS=Dosya secilmedigi icin program kapatildi.

IF [%FileName%]==[]  start cmd /c "@echo off & mode con cols=70 lines=10 & @color b & echo - %FnS% - & pause>nul" & exit


@echo *******************************************************************************************************************

@color b
@echo Oncelikle videonuzun isminde ve klasorlerinizde bosluk olmamasina dikkat ediniz. Aksi halde program calismayacaktir.

@echo *******************************************************************************************************************

@echo Lutfen bosluk miktarini giriniz! (0.03 - 5) :
@set /p margins=
@cls  

@echo *******************************************************************************************************************
@color b
@echo Son olarak bu videoyu nerede kullanmak istediginizi secin  

@echo *******************************************************************************************************************

@echo Premiere Pro ve DavinciResolve icin (-exp), Final-Cut-Pro icin (--export final-cut-pro), mp4 cikti icin bos birakin  :
@set /p export=
@cls  

@echo __________________________________________________________________________________________________

@echo Belirtmis oldugunuz adress : %FileName%
auto-editor %FileName% %export% -m %margins%sec

@pause
`;
};

const baseCode = () => {
  fileName = "base_code";

  textArea.textContent = `@color b
@echo off 
set pwshcmd=powershell -noprofile -command "&{[System.Reflection.Assembly]::LoadWithPartialName('System.windows.forms') | Out-Null;$OpenFileDialog = New-Object System.Windows.Forms.OpenFileDialog; $OpenFileDialog.ShowDialog()|out-null; $OpenFileDialog.FileName}"

for /f "delims=" %%I in ('%pwshcmd%') do set "FileName=%%I"

set FnS=Dosya secilmedigi icin program kapatildi.

IF [%FileName%]==[]  start cmd /c "@echo off & mode con cols=70 lines=10 & @color b & echo - %FnS% - & pause>nul" & exit


@echo *******************************************************************************************************************

@color b
@echo Oncelikle videonuzun isminde ve klasorlerinizde bosluk olmamasina dikkat ediniz. Aksi halde program calismayacaktir.

@echo *******************************************************************************************************************
@color b
@echo Son olarak bu videoyu nerede kullanmak istediginizi secin  

@echo *******************************************************************************************************************

@echo Premiere Pro ve DavinciResolve icin (-exp), Final-Cut-Pro icin (--export final-cut-pro), mp4 cikti icin bos birakin  :
@set /p export=
@cls  

@echo __________________________________________________________________________________________________

@echo Belirtmis oldugunuz adress : %FileName%
auto-editor %FileName% %export%

@pause`;
};

const codeSelections = document.getElementById("codeSelections");

codeSelections.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
    const spans = codeSelections.getElementsByTagName("span");
    for (let span of spans) {
      span.classList.remove("ring");
    }

    e.target.classList.add("ring");
  }
});

const downloadFile = () => {
  const link = document.createElement("a");
  const content = document.querySelector("textarea").value;
  const file = new Blob([content], { type: "text/plain" });
  link.href = URL.createObjectURL(file);
  link.download = "Auto-Editor.txt";
  link.click();
  URL.revokeObjectURL(link.href);
};

const downloadFileBat = () => {
  const link = document.createElement("a");
  const content = document.querySelector("textarea").value;
  const file = new Blob([content], { type: "text/plain" });
  link.href = URL.createObjectURL(file);
  link.download = "Auto-Editor.bat";
  link.click();
  URL.revokeObjectURL(link.href);
};

function copyText() {
  const copyText = document.querySelector("textarea");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);

  alert("Kopyalandı!");
}

dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function closeVid() {
  const closeVid = document.getElementById("mydiv");

  closeVid.classList.add("hidden");
}

function openHelp() {
  const closeVid = document.getElementById("mydiv");

  closeVid.classList.remove("hidden");
}
