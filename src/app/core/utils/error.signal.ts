import { signal } from '@angular/core';

// Holds the current error message (null if no error)
export const errorSignal = signal<string | null>(null);
