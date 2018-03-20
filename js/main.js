/**
    common variables:
        - currentProject

    Maps:
        - glob.typemap:  uid      --> type index
        - glob.graphmap: origname --> image
                                      image.g --> graph object
*/

// first-launch setup
if (!localStorage.fontSize) {
    localStorage.fontSize = 18;
    localStorage.lastProjects = '';
    localStorage.notes = '';
    localStorage.appLanguage = 'English';
}

// bind f1
window.key('f1', function () {
    gui.Shell.openItem(exec + '/docs/index.html');
});
window.key('ctrl + S', function () {
    window.signals.trigger('saveProject');
});
