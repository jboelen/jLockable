/*
 *	Copyright (c) 2013 James Boelen
 *
 *	Permission is hereby granted, free of charge, to any person obtaining a copy
 *	of this software and associated documentation files (the "Software"), to deal
 *	in the Software without restriction, including without limitation the rights
 *	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *	copies of the Software, and to permit persons to whom the Software is
 *	furnished to do so, subject to the following conditions:
 *
 *	The above copyright notice and this permission notice shall be included in
 *	all copies or substantial portions of the Software.
 *
 *	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *	THE SOFTWARE.
 */
 
jLockable = jLockable || function() {
    return function(defaultValue) {
        //Private Variables
        var locked = false;
        var timer;
        var value = defaultValue;
        var onUnlock = function () {};

        //Public Variables
        this.__defineGetter__("value", function () {
            return value;
        });
        this.__defineSetter__("value", function(val) {
            if(!locked)
                value = val;
        });
        
		//Public Methods
        this.isLocked = function() {
            return locked;
        };

        this.Lock = function (onunlock) {
            if (onunlock !== undefined && onunlock !== null)
                onUnlock = onunlock;
            
            window.clearTimeout(timer);
            locked = true;
        };

        this.LockFor = function (length, onunlock) {
            if (onunlock !== undefined && onunlock !== null)
                onUnlock = onunlock;
            
            window.clearTimeout(timer);
            locked = true;
            timer = setTimeout(this.UnLock, length);
        };

        this.UnLock = function () {
            window.clearTimeout(timer);
            locked = false;
			
            onUnlock();            
            onUnlock = function () { };
        };
    };
}();