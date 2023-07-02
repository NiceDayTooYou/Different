var typed = new Typed(".auto-type", {
  strings: [
    "<span style=\"color: black;\">This site is currently under development</span>",
    `public class ListNode{<br/>
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;private string payload;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;private ListNode next;<br>
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;public ListNode(string payload, ListNode next){<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.payload = payload;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.next = next;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;public getPayload(){<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return this.payload;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;public setPayload(string payload){<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.payload = payload;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;public getNext(){<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return this.next;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;public setNext(ListNode next){<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.next = next;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
    <br>
    }
    `,
    `using System;<br>
    using System.Collections.Generic;<br>
    using System.Linq;<br>
    using System.Text;<br>
    using System.Threading.Tasks;<br>
    using System.Windows.Media;<br>
    <br>
    namespace Quokka{<br>
    &nbsp;&nbsp;&nbsp;&nbsp;public class SystemApp{<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public string name;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public string appUserModelID;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public ImageSource icon;<br>
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public SystemApp(string name, string appUserModelID, ImageSource icon){<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.name = name;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.appUserModelID = appUserModelID;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.icon = icon;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public void executeApp(){<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.Diagnostics.Process.Start("explorer.exe", @" shell:appsFolder\" + appUserModelID);<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public override string ToString() {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return name;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
    }<br>
    `
  ],
  startDelay: 500,
  typeSpeed: 30,
  backSpeed: 20,
  cursorChar: '\u005f',
  autoInsertCss: true,
  smartBackspace: true,
  backDelay: 1000,
  fadeOut: true,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500,
  loop: true,
  loopCount: Infinity,
})
//shuffle: true,