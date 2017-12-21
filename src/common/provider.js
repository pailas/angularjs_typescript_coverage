angular.module('mockingProviders', [])
    .provider('sample', function () {
    var registeredVals = [];
    this.register = function (val) {
        registeredVals.push(val);
    };
    this.$get = function () {
        function getRegisteredVals() {
            return registeredVals;
        }
        return {
            getRegisteredVals: getRegisteredVals
        };
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFDLEVBQUUsQ0FBQztLQUNsQyxRQUFRLENBQUMsUUFBUSxFQUFFO0lBQ2xCLElBQUksY0FBYyxHQUFDLEVBQUUsQ0FBQztJQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVMsR0FBRztRQUMxQixjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQyxJQUFJLEdBQUc7UUFDVjtZQUNFLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDeEIsQ0FBQztRQUVELE1BQU0sQ0FBQztZQUNMLGlCQUFpQixFQUFDLGlCQUFpQjtTQUNwQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiY29tbW9uL3Byb3ZpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ21vY2tpbmdQcm92aWRlcnMnLFtdKVxyXG4gIC5wcm92aWRlcignc2FtcGxlJywgZnVuY3Rpb24oKXtcclxuICAgIHZhciByZWdpc3RlcmVkVmFscz1bXTtcclxuICAgIHRoaXMucmVnaXN0ZXIgPSBmdW5jdGlvbih2YWwpe1xyXG4gICAgICByZWdpc3RlcmVkVmFscy5wdXNoKHZhbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuJGdldCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGZ1bmN0aW9uIGdldFJlZ2lzdGVyZWRWYWxzKCl7XHJcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyZWRWYWxzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFJlZ2lzdGVyZWRWYWxzOmdldFJlZ2lzdGVyZWRWYWxzXHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gIH0pO1xyXG4iXSwic291cmNlUm9vdCI6IkM6XFxzcmNcXHRlc3RcXG5nVGVzdF90cyJ9
