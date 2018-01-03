function processLine(r1,c1,r2,c2,r,g,b)
{
	var color = null;
	if(r!=null && g!=null && b!=null)
	{
		color = r+" "+g+" "+b;
	}
	else
	{
		color = "255 255 255";
	}
	
	var points = calcStraightLine(r1,c1,r2,c2);
	//post(points);
	var res = "";
	for(i=0;i<points.length;i+=2){
		res+=points[i]+" "+points[i+1]+" "+color+" ";
		}
		
	outlet(0,res);
}

function processRect(r1,c1,r2,c2,r,g,b)
{
	var color = null;
	if(r!=null && g!=null && b!=null)
	{
		color = r+" "+g+" "+b;
	}
	else
	{
		color = "255 255 255";
	}
	
    res = processLine(r1,c1,r1,c2,r,g,b);
	outlet(0,res);
	res = processLine(r1,c2,r2,c2,r,g,b);
	outlet(0,res);
	res = processLine(r2,c2,r2,c1,r,g,b);
	outlet(0,res);
	res = processLine(r1,c1,r2,c1,r,g,b);	
	outlet(0,res);
}

function processFullRect(r1,c1,r2,c2,r,g,b,fr2,fg2,fb2)
{
	if(r!=null && g!=null && b!=null)
	{
		color = r+" "+g+" "+b;
	}
	else
	{
		color = "255 255 255";
	}
	if(fr2!=null && fg2!=null && fb2!=null)
	{
		fillColor = fr2+" "+fg2+" "+fb2;
	}
	else
	{
		fillColor = color;
	}

	
	 processRect(r1,c1,r2,c2,r,g,b);
	 var res = "";
	
	 for(var r = r1 +1; r < r2; r++){
		for(var c = c1 +1; c < c2; c++){	
				 res += r + " " + c + " " + fillColor+ " ";
		}
	}
	
	outlet(0,res);
	 
}

function calcStraightLine (x1,y1,x2,y2) {
	
    var coordinatesArray = [x1,y1];
	 
    // Translate coordinates
    // Define differences and error check
    var dx = Math.abs(x2 - x1);
    var dy = Math.abs(y2 - y1);
    var sx = (x1 < x2) ? 1 : -1;
    var sy = (y1 < y2) ? 1 : -1;
    var err = dx - dy;
    // Set first coordinates
  
    // Main loop
    while (!((x1 == x2) && (y1 == y2))) {
      var e2 = err << 1;
      if (e2 > -dy) { 
        err -= dy;
        x1 += sx;
      }
      if (e2 < dx) {
        err += dx;
        y1 += sy;
      }
      // Set coordinates

      coordinatesArray.push(x1, y1);
    }
    // Return the result
    return coordinatesArray;
  }

  function circlePoints( cx,  cy,  x,  y, r , g, b)
    {
       var res = "";
        var color = " "+r + " " + g + " " + b+ " ";
        if (x == 0) {
			res+= cx + " " + (cy + y) + color;
			res+= cx + " " + (cy - y) + color;
			res+= (cx + y) + " " + cy + color;
			res+= (cx - y) + " " + cy + color;
		
            /*raster.setPixel(act, cx, cy + y);
            raster.setPixel(pix, cx, cy - y);
            raster.setPixel(pix, cx + y, cy);
            raster.setPixel(pix, cx - y, cy);*/
        } else 
        if (x == y) {
			res+= (cx + x) + " " + (cy + y) + color;
			res+= (cx - x) + " " + (cy + y) + color;
			res+= (cx + x) + " " + (cy - y) + color;
			res+= (cx - x) + " " + (cy - y) + color;
				
            /*raster.setPixel(act, cx + x, cy + y);
            raster.setPixel(pix, cx - x, cy + y);
            raster.setPixel(pix, cx + x, cy - y);
            raster.setPixel(pix, cx - x, cy - y);*/
        } else 
        if (x < y) {
			res+= (cx + x) + " " + (cy + y) + color;
			res+= (cx - x) + " " + (cy + y) + color;
			res+= (cx + x) + " " + (cy - y) + color;
			res+= (cx - x) + " " + (cy - y) + color;
			res+= (cx + y) + " " + (cy + x) + color;
			res+= (cx - y) + " " + (cy + x) + color;
			res+= (cx + y) + " " + (cy - x) + color;
			res+= (cx - y) + " " + (cy - x) + color;
            /*raster.setPixel(act, cx + x, cy + y);
            raster.setPixel(pix, cx - x, cy + y);
            raster.setPixel(pix, cx + x, cy - y);
            raster.setPixel(pix, cx - x, cy - y);
            raster.setPixel(pix, cx + y, cy + x);
            raster.setPixel(pix, cx - y, cy + x);
            raster.setPixel(pix, cx + y, cy - x);
            raster.setPixel(pix, cx - y, cy - x);*/
        }
		return res;
    }

    function processCircle( xCenter,  yCenter, radius, r, g, b )
    {
        if(r==null || g==null || b==null)
		{
			r = g = b = 255;
		}
	
        var x = 0;
        var y = radius;
        var p = (5 - radius*4)/4;
		var res = ""
        res += circlePoints(xCenter, yCenter, x, y, r,g,b);
        while (x < y) {
            x++;
            if (p < 0) {
                p += 2*x+1;
            } else {
                y--;
                p += 2*(x-y)+1;
            }
            res += circlePoints(xCenter, yCenter, x, y, r,g,b);
        }
		outlet(0,res);
    }
