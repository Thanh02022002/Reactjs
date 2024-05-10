import EventEmmiter from 'events';

const _emitter = new EventEmmiter();
_emitter.setMaxListeners(0); // unlimit listener

export const emitter = _emitter;