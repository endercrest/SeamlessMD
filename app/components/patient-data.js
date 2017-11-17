import Component from '@ember/component';

export default Component.extend({
	willRender(){
		$.getJSON('/patient.json').then(data => {
			this.set('patient', data);
		});
	}
});
