class SimpleGraph {
    drawBarChart(data: number[]) {
        console.log("Drawing bar chart:", data);
        // Lógica para dibujar gráficos de barra
    }

    // Se agregaron con el tiempo
    drawPieChart(data: number[]) {
        console.log("Drawing pie chart:", data);
        // Lógica adaptada para dibujar gráficos de pastel
    }

    drawRadialChart(data: number[]) {
        console.log("Drawing radial chart:", data);
        // Lógica adaptada para dibujar gráficos radiales
    }

    // ... otras visualizaciones adaptadas.
}



//////////////////////////////////////////////////
//////////////////////////////////////////////////


class BarChartDrawer {
    draw(data: number[]) {
        console.log("Drawing bar chart:", data);
        // Lógica para dibujar gráficos de barra
    }
}

class PieChartDrawer {
    draw(data: number[]) {
        console.log("Drawing pie chart:", data);
        // Lógica para dibujar gráficos de pastel
    }
}

class RadialChartDrawer {
    draw(data: number[]) {
        console.log("Drawing radial chart:", data);
        // Lógica para dibujar gráficos radiales
    }
}


class SimpleGraph_ {
    private drawer: BarChartDrawer | PieChartDrawer | RadialChartDrawer;

    constructor(drawer: BarChartDrawer | PieChartDrawer | RadialChartDrawer) {
        this.drawer = drawer;
    }

    draw(data: number[]) {
        this.drawer.draw(data);
    }
}

